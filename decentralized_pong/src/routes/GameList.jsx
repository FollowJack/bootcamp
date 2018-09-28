import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GameItem from '../components/GameItem'

class GameList extends Component {
  constructor (probs) {
    super(probs)
    this.state = {
      games: [{
        id: '1',
        matchName: 'Ultimate Pong 1',
        teamNameA: 'David',
        teamNameB: 'Goliath',
        startTime: new Date(new Date().getTime() + 1 * 60000)
      }, {
        id: '2',
        matchName: 'Ultimate Pong 2',
        teamNameA: 'David',
        teamNameB: 'Goliath',
        startTime: new Date(new Date().getTime() - 1 * 60000)
      }]
    }
  }
  render () {
    return (
      <div>
        <h3 className='Games-title'>Choose your Game</h3>
        <div className='row'>
          {
            this.state.games.map((game, index) => {
              return <GameItem key={index} game={game} />
            })
          }
        </div>
        <div>
          <Link to='/new-game' className='Games-btn-new-game btn btn-success'>Create new game</Link>
        </div>
      </div>
    )
  }
}

export default GameList
