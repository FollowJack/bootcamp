import React, { Component } from 'react'
import GameManager from '../pong/GameManager'

class Pong extends Component {
  constructor (props) {
    super(props)
    const startTime = new Date(new Date().getTime() * 3000)
    const teamSide = 'team2'
    this.gameManager = new GameManager(startTime, teamSide)
  }

  // initiaslize event handler for up and down
    // gameManager.moveUp

  // starts game if time is ready

  // gameManager set player side

  render () {
    return (
      <div className='Pong'>
        Hello Canvas
      </div>
    )
  }
}

export default Pong
