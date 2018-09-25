import React, { Component } from 'react'

class GameNew extends Component {
  constructor (props) {
    super(props)
    this.state = {
      maxScore: 1,
      matchName: '',
      teamNameA: '',
      teamNameB: '',
      minutesUntilStart: 1
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  goBack (event) {
    this.setState({})
    this.props.history.push({
      pathname: '/'
    })
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
        <div>
          <form className='GameNew-form' onSubmit={this.handleCreateNewGame}>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>
                Max Score:
              </label>
              <div className='col-sm-10'>
                <input value={this.state.maxScore}
                  onChange={this.handleInputChange.bind(this)}
                  type='number'
                  name='maxScore' className='GameNew-max-score form-control' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>
                Match Name:
              </label>
              <div className='col-sm-10'>
                <input value={this.state.matchName}
                  onChange={this.handleInputChange.bind(this)}
                  type='text'
                  name='matchName' className='GameNew-match-name form-control' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>
                Team Name A:
              </label>
              <div className='col-sm-10'>
                <input value={this.state.teamNameA}
                  onChange={this.handleInputChange.bind(this)}
                  type='text'
                  name='teamNameA' className='GameNew-teamname-a form-control' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>
                Team Name B:
              </label>
              <div className='col-sm-10'>
                <input value={this.state.teamNameB}
                  onChange={this.handleInputChange.bind(this)}
                  type='text'
                  name='teamNameB' className='GameNew-teamname-b form-control' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-12 col-form-label'>
                Game will start in 1 Minutes after creation.
              </label>
            </div>
            <input type='submit' onClick={this.handleCreateNewGame.bind(this)}
              value='Submit' className='GameNew-btn-submit btn btn-primary btn-space' />
            <button type='button' onClick={this.goBack.bind(this)}
              className='btn btn-outline-danger'>Back</button>
          </form>
        </div>
      </div>
    )
  }
}

export default GameNew
