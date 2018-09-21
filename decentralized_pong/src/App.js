import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Games from './routes/Games'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()


class App extends Component {
  constructor (probs) {
    super(probs)
  }

  goToGames () {
    console.log('klick')
    history.replace('/')
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title' onClick={this.goToGames}>| Crowd ° Pong |</h1>
        </header>
        <div className='App-content'>
          <HashRouter>
            <Switch>
              <Route exact path='/' component={Games} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

export default App
// <Route exact path='/' component={App} />
// <Route exact path='/new-game' component={App} />
// <Route exact path='/game/:gameIndex' component={App} />
// <Route path='/swarm' component={App} />
// <Route path='/pong' component={App} />
// <HashRouter>
//         <div>
//           <div className="main-header">
//             <h1>[[-- Crowd Pong --]]</h1>
//           </div>
//           <div className="main-content">
//             <div>
//               <Route exact path="/" component={Games}/>
//               <Route exact path="/new-game" component={NewGame}/>
//               <Route exact path="/game/:gameIndex" component={Game}/>
//             </div>
//           </div>
//         </div>
//       </HashRouter>
