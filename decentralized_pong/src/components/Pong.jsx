import React, { Component } from 'react'
import GameManager from '../pong/GameManager'

class Pong extends Component {
  constructor (props) {
    super(props)
    const startTime = new Date(new Date().getTime() * 3000)
    const teamSide = 'team2'
    this.gameManager = new GameManager(startTime, teamSide)
    this.state = {
      isMoveUpPressed: false,
      isMoveDownPressed: false
    }
  }

  arrowPressed = (event) => {
    if(event.keyCode === 38) { // up
      console.log('up')
      this.gameManager.playerMovesUp()

    } else if(event.keyCode === 40) { // down
      this.gameManager.playerMovesDown()
    }
    if (event.type === 'keyup') {
      this.gameManager.playerMovesUp()
      this.setState({isMoveUpPressed: false, isMoveDownPressed: false})
      return
    }
    // up
    if(event.keyCode === 38) {
      this.setState({isMoveUpPressed: true})
    } else {
      this.setState({isMoveUpPressed: false})
    }
    // down
    if(event.keyCode === 40) {
      this.gameManager.playerMovesDown()
      this.setState({isMoveDownPressed: true})
    } else {
      this.setState({isMoveDownPressed: false})
    }
  }

  clearTimer () {
    clearInterval(this.timer);
  }

  componentDidMount() {
    const canvas = this.refs.pongCanvas
    const context = canvas.getContext("2d")
    document.addEventListener("keydown", this.arrowPressed, false);
    document.addEventListener("keyup", this.arrowPressed, false);
    this.gameManager.setCanvasContext(context)
    this.gameManager.start()

    this.timer = setInterval(this.tick, 100);
  }

  componentWillUnmount (){
    this.clearTimer()
    document.removeEventListener("keydown", this.arrowPressed, false);
    document.removeEventListener("keyup", this.arrowPressed, false);
  }


  // initiaslize event handler for up and down
    // gameManager.moveUp

  // starts game if time is ready

  // gameManager set player side

  render () {
    return (
      <div>
        <div className='Game-arrows'>
          You pressed:
          {
            this.state.isMoveUpPressed
            ? <span className="Game-up-icon oi oi-arrow-circle-top"></span>
            : null
          }
          {
            this.state.isMoveDownPressed
            ? <span className="Game-down-icon oi oi-arrow-circle-bottom"></span>
            : null
          }
        </div>
        <div className='Pong'>
          <canvas id='Pong-canvas' ref='pongCanvas' width={this.gameManager.width} height={this.gameManager.height}>
            Your browser does not support the HTML5 canvas tag.</canvas>
        </div>
      </div>
    )
  }
}

export default Pong
