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
    // TODO start timer when it startTimerIsOver
    this.timer = setInterval(this.tick, 100)

  }

  // timer interval every second

  playerMovesUp () {

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
