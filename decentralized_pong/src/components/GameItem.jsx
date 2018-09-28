import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class GameItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='col-sm-3'>
        <div className='card mb-3'>
          <div className='card-header'>#{this.props.game.id} {this.props.game.matchName}</div>
          <div className='card-body'>
            <p className='card-text'>{this.props.game.teamNameA} vs. {this.props.game.teamNameB}</p>
            <NavLink to={`/game/${this.props.game.id}`} className='Games-view'>View Game</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default GameItem
