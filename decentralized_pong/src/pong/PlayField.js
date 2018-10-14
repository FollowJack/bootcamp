const Paddle = require('./Paddle')
const Ball = require('./Ball')

class PlayField {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.field = this.getInitialField()
    this.paddleLeft = new Paddle(4,49)
    this.paddleRight = new Paddle(994,49)
    this.ball = new Ball(498, 248)
  }

  getInitialField () {
    let field = []
    for (let x = 0; x < this.width; x++) {
      field[x] = []
      for (let y = 0; y < this.height; y++) {
        field[x][y] = null
      }
    }
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
