import React, { Component } from 'react'

class GameNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      maxScore: 1,
      matchName: '',
      teamNameA: '',
      teamNameB: '',
      minutesUntilStart: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleCreateNewGame (event) {
    this.props.history.push({
      pathname: '/',
      state: { newGame: this.state }
    })
  }

  handleInputChange (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
        <h3 className='GameNew-title'>Create new Game</h3>
        <div className='row'>
          <form className='GameNew-form' onSubmit={this.handleCreateNewGame}>
            <label>
              Max Score:
              <input value={this.state.maxScore}
                onChange={this.handleInputChange.bind(this)}
                type='number'
                name='maxScore' className='GameNew-max-score' />
            </label>
            <label>
              Match Name:
              <input value={this.state.matchName}
                onChange={this.handleInputChange.bind(this)}
                type='text'
                name='matchName' className='GameNew-match-name' />
            </label>
            <label>
              Team Name A:
              <input value={this.state.teamNameA}
                onChange={this.handleInputChange.bind(this)}
                type='text'
                name='teamNameA' className='GameNew-teamname-a' />
            </label>
            <label>
              Team Name B:
              <input value={this.state.teamNameB}
                onChange={this.handleInputChange.bind(this)}
                type='text'
                name='teamNameB' className='GameNew-teamname-b' />
            </label>
            <label>
              Start in Minutes:
              <input value={this.state.minutesUntilStart}
                onChange={this.handleInputChange.bind(this)}
                type='number'
                name='minutesUntilStart' className='GameNew-start-in-x-minutes' />
            </label>
            <input type='submit' onClick={this.handleCreateNewGame.bind(this)}
              value='Submit' className='GameNew-btn-submit' />
          </form>
        </div>
      </div>
    )
  }
}

export default GameNew
