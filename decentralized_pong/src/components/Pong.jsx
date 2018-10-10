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
        <canvas id='Pong-canvas' width={this.gameManager.width} height={this.gameManager.height}>
          Your browser does not support the HTML5 canvas tag.</canvas>
      </div>
    )
  }
}

export default Pong
