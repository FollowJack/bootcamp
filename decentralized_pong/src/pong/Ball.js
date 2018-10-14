class Ball {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.height = 4
    this.width = 4
  }

  setPosition (x, y) {
    this.x = x
    this.y = y
  }
}

module.exports = Ball
