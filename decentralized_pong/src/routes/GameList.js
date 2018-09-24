import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GameList extends Component {
  constructor (probs) {
    super(probs)
    this.state = {
      games: []
    }
  }
  render () {
    return (
      <div>
        <div className='row'>
          <Link to='/new-game' className='Games-btn-new-game btn btn-success'>Create new game</Link>
        </div>
        <br />
        <div className='row'>
          <h3 className='Games-title'>Choose your Game</h3>
        </div>
      </div>
    )
  }
}

export default GameList
