import React, { Component } from 'react'

class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '1',
      matchName: 'Ultimate Pong 1',
      teamNameA: 'David',
      teamNameB: 'Goliath',
      startTime: new Date(new Date().getTime() + 1 * 60000),
      playersTeamA: [],
      playersTeamB: [],
      newPlayer: {
        name: ''
      },
      hasPlayerJoined: false
    }
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

  render () {
    return (
      <div>
        <h3 className='Game-title'>Match #{this.props.match.params.id} {this.state.matchName}</h3>
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
          { !this.state.hasPlayerJoined
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
            TODO
          </div>
        </div>
      </div>
    )
  }
}

export default Game
