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

module.exports = Cell
