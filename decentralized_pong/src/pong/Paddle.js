class Paddle {
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.height = 10
    this.width = 3
  }

  setPosition (x, y) {
    this.x = x
    this.y = y
  }
}

module.exports = Paddle
