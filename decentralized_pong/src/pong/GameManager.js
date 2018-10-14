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
    const ball = this.pong.playField.ball
    const ballX = ball.x
    const ballY = ball.y
    const ballWidth = ball.width
    const ballHeight = ball.height
    this.canvasContext.fillStyle = 'white'
    this.canvasContext.fillRect(ballX, ballY, ballWidth, ballHeight)
  }

  drawPaddle (paddle) {
    const paddleX = paddle.x
    const paddleY = paddle.y
    const paddleWidth = paddle.width
    const paddleHeight = paddle.height
    this.canvasContext.fillStyle = 'white'
    this.canvasContext.fillRect(paddleX, paddleY, paddleWidth, paddleHeight)
  }

  drawPaddles () {
    const paddleLeft = this.pong.playField.paddleLeft
    const paddleRight = this.pong.playField.paddleRight
    this.drawPaddle(paddleLeft)
    this.drawPaddle(paddleRight)
  }

  drawPong () {
    this.drawBackground()
    this.drawPaddles()
    this.drawBall()
  }


  playerMovesUp () {

  }

  setCanvasContext (canvasContext) {
    this.canvasContext = canvasContext
  }

  start () {
    this.timer = setInterval(this.tick, 100)
  }

  tick = () => {
    // send data
    // get data
    // aggregate
    const thresholdPaddleLeft = 1
    const thresholdPaddleRight = 1
    // trigger move
    // move paddles
    this.pong.playerMovesUp('LEFT',thresholdPaddleLeft)
    this.pong.playerMovesDown('RIGHT',thresholdPaddleRight)
    // move ball
    this.pong.moveBall()
    this.isMovementSend = false
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
}

module.exports = GameManager




// manages the game
// calls the data
// has a timer that every second redraws the game
