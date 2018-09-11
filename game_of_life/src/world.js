const Cell = require('./cell')
const cellState = require('./cell_state')

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
        world[height].push(new Cell(cellState.DEAD))
      }
    }
    return world
  }
  getCell (height, width) {
    height = height >= this.height ? this.height - 1 : height
    width = width >= this.width ? this.width - 1 : width
    return this.space[height][width]
  }
  setCell (height, width, cell) {
    height = height >= this.height ? this.height - 1 : height
    width = width >= this.width ? this.width - 1 : width
    this.space[height][width] = cell
  }
}

module.exports = World
