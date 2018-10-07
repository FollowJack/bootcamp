const DataManager = require('./DataManager')
const Pong = require('./Pong')

class GameManager {
  constructor (startTime, teamSide) {
    this.startTime = startTime
    this.selectedTeam = teamSide
    this.isMovementSend = false
    this.dataManager = new DataManager()
    this.pong = new Pong()
    // start timer when it startTimerIsOver
  }

  // timer interval every second
    // send data
    // get data
    // aggregate
    // trigger move

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
