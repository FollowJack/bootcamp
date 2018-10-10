const PlayField = require('./PlayField')

class Pong {
  constructor (width, height) {
    this.playField = new PlayField(width, height)
  }

  moveBall () {
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

    if (playerSite === 'team1') {
      paddlePosition = this.playField.paddleLeft
      this.playField.paddleLeft.position.y += threshold
    } else {
      paddlePosition = this.playField.paddleRight
      this.playField.paddleRight.position.y += threshold
    }
  }


}

module.exports = Pong




// has the game rules inherint
// contains a field with a ball and two paddles
// gets command
// actualize its playfield
// inform the game manager that the game is over?
