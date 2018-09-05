class Cell {
  constructor (state = 'DEAD') {
    this.state = state
  }
  isAlive (cell) {
    return this.state === 'LIVE'
  }
  isDead (cell) {
    return this.state === 'DEAD'
  }
}

class World {
  constructor (width, height) {
    if (typeof height !== 'number' || typeof width !== 'number') {
      throw new Error('Height and width are not set as numbers')
    }
    if (height <= 0 || width <= 0) {
      throw new Error('Height and width should be at least 1')
    }
    this.height = height
    this.width = width
    this.space = this.initializeSpace()
  }
  /// PUBLIC
  countNeighbours (height, width) {
    let neighbours = 0
    // case: -,-
    if (height - 1 >= 0 && width - 1 >= 0) {
      if (this.getCell(height - 1, width - 1).isAlive()) {
        neighbours += 1
      }
    }
    // case: -,0
    if (height - 1 >= 0) {
      if (this.getCell(height - 1, width).isAlive()) {
        neighbours += 1
      }
    }
    // case: -,+
    if (height - 1 >= 0 && width + 1 < this.width) {
      if (this.getCell(height - 1, width + 1).isAlive()) {
        neighbours += 1
      }
    }
    // case: 0,-
    if (width - 1 >= 0) {
      if (this.getCell(height, width - 1).isAlive()) {
        neighbours += 1
      }
    }
    // case: 0,+
    if (width + 1 < this.width) {
      if (this.getCell(height, width + 1).isAlive()) {
        neighbours += 1
      }
    }
    // case: +,-
    if (height + 1 < this.height && width - 1 >= 0) {
      if (this.getCell(height + 1, width - 1).isAlive()) {
        neighbours += 1
      }
    }
    // case: +,0
    if (height + 1 < this.height) {
      if (this.getCell(height + 1, width).isAlive()) {
        neighbours += 1
      }
    }
    // case: +,+
    if (height + 1 < this.height && width + 1 < this.width) {
      if (this.getCell(height + 1, width + 1).isAlive()) {
        neighbours += 1
      }
    }
    return neighbours
  }
  initializeSpace () {
    let world = []
    for (let height = 0; height < this.height; height++) {
      for (let width = 0; width < this.width; width++) {
        if (width === 0) {
          world.push([])
        }
        world[height].push(new Cell('DEAD'))
      }
    }
    return world
  }
  getCell (height, width) {
    return this.space[height][width]
  }
  setCell (height, width, cell) {
    this.space[height][width] = cell
  }
}

class GameOfLife {
  constructor (width, height) {
    this.world = new World(width, height)
    this.generation = 0
  }
  /// PUBLIC
  getPopulationHeight () {
    return this.world.height
  }
  getPopulationWidth () {
    return this.world.width
  }
  isCellAlive (height, width) {
    return this.world.getCell(height, width).isAlive()
  }
  switchCellState (height, width) {
    let isAlive
    const cell = this.world.getCell(height, width)
    if (cell.isAlive()) {
      this.world.setCell(height, width, new Cell('DEAD'))
      isAlive = false
    } else {
      this.world.setCell(height, width, new Cell('LIVE'))
      isAlive = true
    }
    return isAlive
  }
  swtichToNextGeneration () {
    this.world = this.getNextGenerationWorld()
    this.generation += 1
  }

  /// PRIVATE
  getNextGenerationWorld () {
    const populationHeight = this.getPopulationHeight()
    const populationWidth = this.getPopulationWidth()
    let newWorld = new World(populationWidth, populationHeight)

    for (let height = 0; height < newWorld.height; height++) {
      for (let width = 0; width < newWorld.width; width++) {
        let neighbours = this.world.countNeighbours(height, width)

        if (neighbours <= 1) { // GAME RULE #1
          newWorld.setCell(height, width, new Cell('DEAD'))
        } else if (this.world.getCell(height, width).isAlive() &&
        (neighbours === 2 || neighbours === 3)) { // GAME RULE #2
          newWorld.setCell(height, width, new Cell('LIVE'))
        } else if (this.world.getCell(height, width).isAlive() &&
        neighbours > 3) { // GAME RULE #3
          newWorld.setCell(height, width, new Cell('DEAD'))
        } else if (this.world.getCell(height, width).isDead() &&
          neighbours === 3) { // GAME RULE #4
          newWorld.setCell(height, width, new Cell('LIVE'))
        }
      }
    }

    return newWorld
  }
}

class UiManager {
  constructor () {
    this.gameOfLife = new GameOfLife(200, 100)
    this.cellSize = 9
    this.cellSpace = 1

    this.lastXPosition = 0
    this.lastYPosition = 0
    this.mouseDown = false

    this.elements = {
      canvas: null,
      context: null,
      runButton: null,
      runButtonId: 'run'
    }
    this.colors = {
      alive: '#00FF00',
      background: '#FFFFFF',
      grid: '#808080'
    }

    this.initializeCanvas()
    this.registerUIEvents()
  }
  canvasMouseDown (event) {
    const position = this.getCanvasPosition(event)
    this.switchCellState(position.x, position.y)
    this.lastXPosition = position.x
    this.lastYPosition = position.y
    this.mouseDown = true
  }
  canvasMouseUp () {
    this.mouseDown = false
  }
  canvasMouseMove (event) {
    if (this.mouseDown) {
      const position = this.getCanvasPosition(event)
      if ((position.x !== this.lastXPosition) || (position.y !== this.lastYPosition)) {
        this.switchCellState(position.x, position.y)
        this.lastXPosition = position.x
        this.lastYPosition = position.y
      }
    }
  }
  drawCell (isAlive, x, y) {
    if (isAlive) {
      this.elements.context.fillStyle = this.colors.alive
    } else {
      this.elements.context.fillStyle = this.colors.background
    }

    let factor = this.cellSize + this.cellSpace
    this.elements.context.fillRect(x * factor, y * factor, this.cellSize, this.cellSize)
  }
  drawGrid () {
    // clear canvas
    this.elements.context.fillStyle = this.colors.background
    this.elements.context.fillRect(0, 0, this.gameOfLife.getPopulationWidth(), this.gameOfLife.getPopulationHeight())

    let boxSize = this.cellSize + this.cellSpace
    // draw grid pattern
    // horizontal lines
    for (let x = 0; x < this.gameOfLife.getPopulationWidth() * boxSize; x += boxSize) {
      this.elements.context.moveTo(x, 0)
      this.elements.context.lineTo(x, this.gameOfLife.getPopulationWidth() * boxSize)
    }
    // vertical lines
    for (let y = 0; y < this.gameOfLife.getPopulationHeight() * boxSize; y += boxSize) {
      this.elements.context.moveTo(0, y)
      this.elements.context.lineTo(this.gameOfLife.getPopulationWidth() * boxSize, y)
    }
    this.elements.context.strokeStyle = this.colors.grid
    this.elements.context.stroke()
  }
  getCanvasPosition (event) {
    let position = this.getMousePosition(event)
    position.x = Math.round(position.x / (this.cellSize + this.cellSpace))
    position.y = Math.round(position.y / (this.cellSize + this.cellSpace))
    return position
  }
  getMousePosition (event) {
    var rectangle = this.elements.canvas.getBoundingClientRect()
    return {
      x: Math.round(event.clientX - rectangle.left),
      y: Math.round(event.clientY - rectangle.top)
    }
  }
  initializeCanvas () {
    this.elements.canvas = document.getElementById('canvas')
    this.elements.context = this.elements.canvas.getContext('2d')
    this.drawGrid()
    this.registerMouseEvents()
  }
  redrawWorld () {
    for (let height = 0; height < this.gameOfLife.getPopulationHeight(); height++) {
      for (let width = 0; width < this.gameOfLife.getPopulationWidth(); width++) {
        this.drawCell(this.gameOfLife.isCellAlive(height, width), height, width)
      }
    }
  }
  registerEvent (element, event, handler) {
    element.addEventListener(event, handler.bind(this), false)
  }
  registerMouseEvents () {
    this.registerEvent(this.elements.canvas, 'mousedown', this.canvasMouseDown)
    this.registerEvent(document, 'mouseup', this.canvasMouseUp)
    this.registerEvent(this.elements.canvas, 'mousemove', this.canvasMouseMove)
  }
  registerUIEvents () {
    this.elements.runButton = document.getElementById(this.elements.runButtonId)
    this.registerEvent(this.elements.runButton, 'click', this.startGame)
  }
  startGame () {
    window.setInterval(() => {
      this.gameOfLife.swtichToNextGeneration()
      this.redrawWorld()
    }, 100)
  }
  switchCellState (height, width) {
    const isAlive = this.gameOfLife.switchCellState(height, width)
    this.drawCell(isAlive, height, width)
  }
}

const game = new UiManager()
//
module.exports.Cell = Cell
module.exports.World = World
module.exports.GameOfLife = GameOfLife
// module.exports.UiManager = UiManager
