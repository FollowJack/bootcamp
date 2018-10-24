const Paddle = require('./Paddle')
const Ball = require('./Ball')

class PlayField {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.field = this.getInitialField()
    const paddleLeftY = Math.round(((this.height-1)/2)-50)
    const paddleRightX = Math.round(this.width-1-10)
    const paddleRightY = Math.round(((this.height-1)/2)-50)
    const ballX = (this.width/2)-1
    const ballY = (this.height-1)/2
    this.paddleLeft = new Paddle(1, paddleLeftY)
    this.paddleRight = new Paddle(paddleRightX, paddleRightY)
    this.ball = new Ball(ballX, ballY, 5, 0)
  }

  getInitialField () {
    let field = []
    for (let x = 0; x < this.width; x++) {
      field[x] = []
      for (let y = 0; y < this.height; y++) {
        field[x][y] = null
      }
    }
    return field
  }

  /*
    0,0 1,0 2,0
    0,1 1,1 2,1
    0,2 1,2 2,2
  */

  // 1000 * 500
  // height 100
  // max move 20
  // min move 5
  // width 100
  // move 30

}

module.exports = PlayField




// has the ball and paddles
// two dimensional array
