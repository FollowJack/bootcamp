const Cell = require('./cell')
const World = require('./world')
const cellState = require('./cell_state')

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
      this.world.setCell(height, width, new Cell(cellState.DEAD))
      isAlive = false
    } else {
      this.world.setCell(height, width, new Cell(cellState.ALIVE))
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
          newWorld.setCell(height, width, new Cell(cellState.DEAD))
        } else if (this.world.getCell(height, width).isAlive() &&
        (neighbours === 2 || neighbours === 3)) { // GAME RULE #2
          newWorld.setCell(height, width, new Cell(cellState.ALIVE))
        } else if (this.world.getCell(height, width).isAlive() &&
        neighbours > 3) { // GAME RULE #3
          newWorld.setCell(height, width, new Cell(cellState.DEAD))
        } else if (this.world.getCell(height, width).isDead() &&
          neighbours === 3) { // GAME RULE #4
          newWorld.setCell(height, width, new Cell(cellState.ALIVE))
        }
      }
    }

    return newWorld
  }
}

module.exports = GameOfLife
