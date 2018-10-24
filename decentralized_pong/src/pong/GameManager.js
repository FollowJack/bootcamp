const DataManager = require('./DataManager')
const Pong = require('./Pong')

class GameManager {
  constructor (startTime, teamSide) {
    this.startTime = startTime
    this.selectedTeam = teamSide
    this.isMovementSend = false
    this.dataManager = new DataManager()
    this.width = 1000
    this.height = 500
    this.pong = new Pong(this.width, this.height)
    this.participantsLeftTeam = []
    this.participantsRightTeam = []
    this.canvasContext
  }

  drawBackground () {
    this.canvasContext.fillStyle = 'black'
    this.canvasContext.fillRect(0, 0, this.width, this.height)
  }

  drawBall () {
    this.pong.playField.ball.draw(this.canvasContext)
  }

  drawMiddleLine () {
    this.canvasContext.fillStyle = 'white'
    this.canvasContext.fillRect(this.width / 2, 0, 2, this.height)
  }

  drawPaddles () {
    this.pong.playField.paddleLeft.draw(this.canvasContext)
    this.pong.playField.paddleRight.draw(this.canvasContext)
  }

  drawPong () {
    this.drawBackground()
    this.drawMiddleLine()
    this.drawPaddles()
    this.drawBall()
  }

  resetBall (paddle) {
    // TODO
    // var isPlayer1Winner = player.playerNumber === this.p1.playerNumber

    // set ball position
    this.pong.playField.ball.x = this.width / 2
    this.pong.playField.ball.y = paddle.y + paddle.height / 2

    // set ball velocity
    this.pong.playField.ball.vx = 5
    this.pong.playField.ball.vy = 0

    // TODO ball direction
    // if (isPlayer1Winner) {
    //   this.ball.vx *= -1
    // }
  }

  setCanvasContext (canvasContext) {
    this.canvasContext = canvasContext
  }

  score (player) {
    // TODO
    // player.score++
  }

  start () {
    this.timer = setInterval(this.tick, 100)
  }

  tick = () => {
    // send data
    // get data
    // aggregate
    const thresholdPaddleLeft = 5
    const thresholdPaddleRight = 0
    // trigger move
    // move paddles
    this.pong.playerMovesUp('LEFT',thresholdPaddleLeft)
    this.pong.playerMovesDown('RIGHT',thresholdPaddleRight)
    // move ball
    this.pong.playField.ball.setNextPosition()
    this.pong.moveBall()
    this.isMovementSend = false
    this.updateScore()
    this.drawPong()
  }

  playerMovesDown () {
    // send data // TODO:
    this.isMovementSend = true
  }
  playerMovesUp () {
    // send data // TODO:
    this.isMovementSend = true
  }
  updateScore () {
    if (this.pong.playField.ball.x >= this.width) {
      const paddle = this.pong.playField.paddleLeft
      this.score(paddle)
      this.resetBall(paddle)
    } else if (this.pong.playField.ball.x + this.pong.playField.ball.width <= 0) {
      const paddle = this.pong.playField.paddleRight
      this.score(paddle)
      this.resetBall(paddle)
    }

    // if (this.p1.score == this.maxScore) {
    //    this.won = 1;
    // } else if (this.p2.score == this.maxScore) {
    //    this.won = 2;
    // }
  }
}

module.exports = GameManager




// manages the game
// calls the data
// has a timer that every second redraws the game
