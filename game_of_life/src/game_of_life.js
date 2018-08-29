class GameOfLife {
  constructor (height, width) {
    if (typeof height !== 'number' || typeof width !== 'number') {
      throw new Error('Height and width are not set as numbers')
    }
    if (height <= 0 || width <= 0) {
      throw new Error('Height and width should be at least 1')
    }
    this.height = height
    this.width = width
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
        field[height].push({state: 'DEAD', neighbours: 0})
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
    this.field = this.getNextStateField()
  }

  getNextStateField () {
    let field = this.initializeField()

    for (let x = 0; x < field.length; x++) {
      for (let y = 0; y < field[x].length; y++) {
        let neighbours = 0
        // case: -,-
        if (x - 1 >= 0 && y - 1 >= 0) {
          if (this.isCellAlive(this.field[x - 1][y - 1])) {
            neighbours += 1
          }
        }
        // case: -,0
        if (x - 1 >= 0) {
          if (this.isCellAlive(this.field[x - 1][y])) {
            neighbours += 1
          }
        }
        // case: -,+
        if (x - 1 >= 0 && y + 1 < this.width) {
          if (this.isCellAlive(this.field[x - 1][y + 1])) {
            neighbours += 1
          }
        }
        // case: 0,-
        if (y - 1 >= 0) {
          if (this.isCellAlive(this.field[x][y - 1])) {
            neighbours += 1
          }
        }
        // case: 0,+
        if (y + 1 < this.width) {
          if (this.isCellAlive(this.field[x][y + 1])) {
            neighbours += 1
          }
        }
        // case: +,-
        if (x + 1 < this.height && y - 1 >= 0) {
          if (this.isCellAlive(this.field[x + 1][y - 1])) {
            neighbours += 1
          }
        }
        // case: +,0
        if (x + 1 < this.height) {
          if (this.isCellAlive(this.field[x + 1][y])) {
            neighbours += 1
          }
        }
        // case: +,+
        if (x + 1 < this.height && y + 1 < this.width) {
          if (this.isCellAlive(this.field[x + 1][y + 1])) {
            neighbours += 1
          }
        }
        if (neighbours <= 1) {
          field[x][y].state = 'DEAD'
        }
        if (this.field[x][y].state === 'LIVE' &&
         (neighbours === 2 ||
          neighbours === 3)) {
          field[x][y].state = 'LIVE'
        }
        if (this.field[x][y].state === 'LIVE' &&
         neighbours > 3) {
          field[x][y].state = 'DEAD'
        }
        if (this.field[x][y].state === 'DEAD' &&
         neighbours === 3) {
          field[x][y].state = 'LIVE'
        }
      }
    }

    return field
  }

  isCellAlive (cell) {
    return cell.state === 'LIVE'
  }

  isCellDead (cell) {
    return cell.state === 'DEAD'
  }
}

module.exports = GameOfLife
