class Ball {
  constructor (x, y, vx, vy) {
    this.x = x
    this.y = y
    this.height = 10
    this.width = 10
    this.vx = vx
    this.vy = vy
  }

  draw (context) {
    context.fillStyle = 'white'
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  setNextPosition () {
    this.x += this.vx
    this.y += this.vy
  }

  isMovingRight () {
    return this.vx > 0
  }

}

module.exports = Ball
