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

  drawPaddles () {
    this.pong.playField.paddleLeft.draw(this.canvasContext)
    this.pong.playField.paddleRight.draw(this.canvasContext)
  }

  drawPong () {
    this.drawBackground()
    this.drawPaddles()
    this.drawBall()
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
    const thresholdPaddleLeft = 5
    const thresholdPaddleRight = 5
    // trigger move
    // move paddles
    this.pong.playerMovesUp('LEFT',thresholdPaddleLeft)
    this.pong.playerMovesDown('RIGHT',thresholdPaddleRight)
    // move ball
    this.pong.playField.ball.setNextPosition()
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
