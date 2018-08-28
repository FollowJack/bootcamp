class GameOfLife {
  constructor (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Height and width are not set as numbers')
    }
    if (x <= 0 || y <= 0) {
      throw new Error('Height and width should be at least 1')
    }
    this.height = x
    this.width = y
    this.field = []
    this.field = this.initializeField()
    this.state = 0
  }

  initializeField () {
    let field = []
    for (let height = 0; height < this.height; height++) {
      for (let width = 0; width < this.width; width++) {
        if (width === 0) {
          field.push([])
        }
        field[height].push({state: 'DEAD'})
      }
    }
    return field
  }

  setCellLive (x, y) {
    this.field[x][y].state = 'LIVE'
  }

  setCellDead (x, y) {
    this.field[x][y].state = 'DEAD'
  }

  swtichToNextState () {
    this.state += 1
  }
}

module.exports = GameOfLife
