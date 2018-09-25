import React, { Component } from 'react'

class Game extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  goBack (event) {
    this.setState({})
    this.props.history.push({
      pathname: '/'
    })
  }

  render () {
    return (
      <div>
        <h3 className='Game-title'>Match #{this.props.match.params.id}</h3>
      </div>
    )
  }
}

export default Game
