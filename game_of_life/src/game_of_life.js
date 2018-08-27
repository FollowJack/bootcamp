class GameOfLife {
  constructor (height, width) {
    this.height = height
    this.width = width
    this.field = []
    this.initializeField()
  }

  initializeField () {
    let field = []
    for (let h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        if (w === 0) {
          field.push([])
        }
        field[h].push(false)
      }
    }
    this.field = field
  }
}

module.exports = GameOfLife
