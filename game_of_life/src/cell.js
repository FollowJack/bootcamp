const cellState = require('./cell_state')

class Cell {
  constructor (state = cellState.DEAD) {
    this.state = state
  }
  isAlive (cell) {
    return this.state === cellState.ALIVE
  }
  isDead (cell) {
    return this.state === cellState.DEAD
  }
}

module.exports = Cell
