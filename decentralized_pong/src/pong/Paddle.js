class Paddle {
  constructor (x, y, width, height) {
    this.position = {
      x: x,
      y: y
    }
    this.height = height
    this.width = width
  }

  setPosition (x, y) {
    this.position.x = x
    this.position.y = y
  }
}

module.exports = Paddle
