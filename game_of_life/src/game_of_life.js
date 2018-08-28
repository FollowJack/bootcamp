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
        field[height].push(false)
      }
    }
    return field
  }

  swtichToNextState () {
    this.state += 1
  }
}

module.exports = GameOfLife
