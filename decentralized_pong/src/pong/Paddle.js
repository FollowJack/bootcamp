class Paddle {
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.height = 100
    this.width = 10
  }

  setPosition (x, y) {
    this.x = x
    this.y = y
  }
  draw (context) {
    context.fillStyle = 'white'
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}

module.exports = Paddle
