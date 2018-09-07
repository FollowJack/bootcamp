const GameOfLife = require('./game_of_life')

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

module.exports = UiManager
