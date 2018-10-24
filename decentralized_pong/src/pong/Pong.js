const PlayField = require('./PlayField')

class Pong {
  constructor (width, height) {
    this.height = height
    this.width = width
    this.playField = new PlayField(width, height)
  }

  calculateBounceDirection (collisionPoint) {
    const paddleMiddle = this.playField.paddleLeft.height / 2
    const direction = collisionPoint - paddleMiddle
    // normalize
    return Math.round(((direction - 0) / paddleMiddle) * 5)
  }

  moveBall () {
    const ball = this.playField.ball
    if (this.playField.ball.isMovingRight()) {
      // P2 collision detection
      // p2.x behind or at ball && p2.x infront moved ball
      if (this.playField.paddleRight.x <= ball.x + ball.width &&
        this.playField.paddleRight.x > ball.x - ball.vx + ball.width) {
        var collisionDiff = ball.x + ball.width - this.playField.paddleRight.x
        var k = collisionDiff / ball.vx
        var y = ball.vy * k + (ball.y - ball.vy)

        // collides with right paddle
        if (y >= this.playField.paddleRight.y && y + ball.height <= this.playField.paddleRight.y + this.playField.paddleRight.height) {
          ball.x = this.playField.paddleRight.x - ball.width
          ball.y = Math.floor(ball.y - ball.vy + ball.vy * k)
          ball.vx = -ball.vx
          ball.vy = this.calculateBounceDirection(ball.y - this.playField.paddleRight.y)
          this.playField.ball = ball
        }
      }
    } else { // ball moves left
      // P1 collision detection
      if (this.playField.paddleLeft.x + this.playField.paddleLeft.width >= ball.x) {
        var collisionDiff = this.playField.paddleLeft.x + this.playField.paddleLeft.width - ball.x
        var k = collisionDiff / -ball.vx
        var y = ball.vy * k + (ball.y - ball.vy)

        // collides with the left paddle
        if (y >= this.playField.paddleLeft.y && y + ball.height <= this.playField.paddleLeft.y + this.playField.paddleLeft.height) {
          ball.x = this.playField.paddleLeft.x + this.playField.paddleLeft.width
          ball.y = Math.floor(ball.y - ball.vy + ball.vy * k)
          ball.vx = -ball.vx
          ball.vy = this.calculateBounceDirection(ball.y - this.playField.paddleLeft.y)
          this.playField.ball = ball
        }
      }
    }

    // Ball Top and bottom collision
    if ((ball.vy < 0 && ball.y < 0) ||
    (ball.vy > 0 && ball.y + ball.height > this.height)) {
      ball.vy = -ball.vy
      this.playField.ball = ball
    }
    // ballSerial++;
    //TODO
  }

  playerMovesUp (playerSite, threshold) {
    const direction = 'UP'
    this.playerMoves(playerSite, direction, threshold)
  }

  playerMovesDown (playerSite, threshold) {
    const direction = 'DOWN'
    this.playerMoves(playerSite, direction, threshold)
  }

  playerMoves (playerSite, direction, threshold) {
    // get player
    let paddlePosition
    threshold = direction === 'UP' ? -threshold : +threshold
    if (playerSite === 'LEFT') {
      paddlePosition = this.playField.paddleLeft
      this.playField.paddleLeft.y += Math.round(threshold)
      // upper edge
      if (this.playField.paddleLeft.y < 0) {
        this.playField.paddleLeft.y = 0
      }
      // lower edge
      else if (this.playField.paddleLeft.y > this.height-1-this.playField.paddleLeft.height) {
        this.playField.paddleLeft.y = Math.round(this.height-1-this.playField.paddleLeft.height)
      }
    } else {
      paddlePosition = this.playField.paddleRight
      this.playField.paddleRight.y += Math.round(threshold)
      if (this.playField.paddleRight.y < 0) {
        this.playField.paddleRight.y = 0
      }
      else if (this.playField.paddleRight.y > this.height-this.playField.paddleRight.height) {
        this.playField.paddleRight.y = Math.round(this.height-this.playField.paddleRight.height)
      }
    }
  }


}

module.exports = Pong




// has the game rules inherint
// contains a field with a ball and two paddles
// gets command
// actualize its playfield
// inform the game manager that the game is over?
