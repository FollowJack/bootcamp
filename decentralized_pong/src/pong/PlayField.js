const Paddle = require('./Paddle')
const Ball = require('./Ball')

class PlayField {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.field = this.getInitialField()
    this.paddleLeft = new Paddle(1, ((this.height-1)/2)-50)
    this.paddleRight = new Paddle(this.width-1-10, ((this.height-1)/2)-50)
    this.ball = new Ball((this.width/2)-1, (this.height-1)/2, 5, 0)
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
