import React, { Component } from 'react'

class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '1',
      matchName: 'Ultimate Pong 1',
      teamNameA: 'David',
      teamNameB: 'Goliath',
      startTime: new Date(new Date().getTime() + 1 * 6000),
      playersTeamA: [],
      playersTeamB: [],
      newPlayer: {
        name: ''
      },
      hasPlayerJoined: false,
      hasGameStarted: false,
      secondsUntilMatchStarts: 0,
      isMoveUpPressed: false,
      isMoveDownPressed: false
    }
  }

  clearTimer () {
    clearInterval(this.timer);
  }

  arrowPressed = (event) => {
    if (event.type === 'keyup') {
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
      this.setState({isMoveDownPressed: true})
    } else {
      this.setState({isMoveDownPressed: false})
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.arrowPressed, false);
    document.addEventListener("keyup", this.arrowPressed, false);
    this.timer = setInterval(this.tick, 100);
  }

  componentWillUnmount (){
    this.clearTimer()
    document.removeEventListener("keydown", this.arrowPressed, false);
    document.removeEventListener("keyup", this.arrowPressed, false);
  }

  getPlayersCount () {
    return this.state.playersTeamA.length + this.state.playersTeamB.length
  }

  goBack (event) {
    this.setState({})
    this.props.history.push({
      pathname: '/'
    })
  }

  handleInputChange = (event) => {
    const name = event.target.value
    this.setState({
      newPlayer: {
        name: name
      }
    })
  }

  joinGame (event) {
    if(this.state.newPlayer.name === '') {
      return
    }
    const playersCounter = this.getPlayersCount()
    if (playersCounter % 2 === 0) {
      this.setState({
        playersTeamA: [...this.state.playersTeamA, this.state.newPlayer]
      })
    } else {
      this.setState({
        playersTeamB: [...this.state.playersTeamB, this.state.newPlayer]
      })
    }
    this.setState({hasPlayerJoined: true, newPlayer: { name: ''}})
  }

  tick = () => {
    let timeUntilStarts = Math.round((new Date() - this.state.startTime) / 1000)
    if (timeUntilStarts >= 0) {
      this.setState({
        hasGameStarted: true,
        secondsUntilMatchStarts: 0
      })
      return
    }
    timeUntilStarts = Math.abs(timeUntilStarts)
    this.setState({secondsUntilMatchStarts: timeUntilStarts})
  }

  render () {
    return (
      <div>
        <h3 className='Game-title'>Match #{this.props.match.params.id} {this.state.matchName}</h3>
        <h5> Choose your player name and use the arrow up and arrow down key on your keyboard</h5>
        <h5 className='Game-timer-start'>Match starts in {this.state.secondsUntilMatchStarts}s</h5>
        <div className='row'>

          <div className='Game-player-team-a col-sm-6 mb-3'>
            <ul className='team-a list-group'>
              <li className='list-group-item active'>Team: {this.state.teamNameA}</li>
              {
                this.state.playersTeamA.map((player, index) => {
                  return <li className='list-group-item' key={index} >{player.name}</li>
                })
              }
            </ul>
          </div>
          <div className='Game-player-team-b col-sm-6 mb-3'>
            <ul className='list-group'>
              <li className='team-b list-group-item active'>Team: {this.state.teamNameB}</li>
              {
                this.state.playersTeamB.map((player, index) => {
                  return <li className='list-group-item' key={index} >{player.name}</li>
                })
              }
            </ul>
          </div>
          { !this.state.hasPlayerJoined && !this.state.hasGameStarted
           ?  <div className='form-inline col-sm-12'>
                <div className='form-group mb-2'>
                  <input type='text' readOnly className='form-control-plaintext' value='Your Name:' />
                </div>
                <div className='form-group mx-sm-3 mb-2'>
                  <input value={this.state.newPlayer.name}
                    onChange={this.handleInputChange}
                    type='text'
                    name='newPlayerName' className='Game-player-name-input form-control' />
                </div>
                <button type='button' onClick={this.joinGame.bind(this)}
                  className='Game-btn-join btn btn-success mb-2'>Join Game</button>
              </div>
           : null
          }
          <div className='Game-pong-canvas col-sm-12'>
            <div className='Game-playfield'>
              Playfield
            </div>
            <div className='Game-arrows'>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Game
