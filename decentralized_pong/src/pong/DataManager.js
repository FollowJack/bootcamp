class DataManager {
  contructor () { }

  aggregateMovements (participantList) {
    let threshelold = 0
    let velocity
    for (let i = 0; i < participantList.length; i++) {
      // TODO if up then add positive velocity
      // TODO if down then add minus velocity
      velocity += 1
      // velocity -= 1
    }
    return {
      velocity1: velocity,
      velocity2: velocity
    }
  }

  getDirection (velocity) {
    let direction = 'NOTHING'
    if (velocity > 0) {
      direction = 'UP'
    } else if (velocity < 0) {
      direction = 'DOWN'
    }
    return direction
  }
  getState (participantsLeftTeam, participantsRightTeam) {
    // TODO: get and aggregate real state
    const velocityLeft = this.aggregateMovements(participantsLeftTeam)
    const velocityRight = this.aggregateMovements(participantsRightTeam)

    const directionLeft = this.getDirection(velocityLeft)
    const directionRight = this.getDirection(velocityRight)
    return {
      leftTeam: {
        direction: directionLeft,
        threshold: velocityLeft
      },
      rightTeam: {
        direction: directionRight,
        threshold: velocityRight
      }
    }
  }
  sendMove (direction) {
    // TODO send real position
    this.nextMove = direction
  }
}
module.exports = DataManager




// has the ball and paddles
// two dimensional array
