import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/stylish-portfolio.css'

import Sidebar from './components/common/sidebar'
import FooterSection from './components/common/footer'
import ScrollToTop from './components/common/scrollToTop'
import GameOfLife from './components/projects/gameOfLife'
import Home from './components/home/index'

class App extends React.Component {
  render () {
    return (
      <div>
        <Sidebar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/game_of_life' component={GameOfLife} />
            <Route path='*' component={Home} />
          </Switch>
        </Router>

        <FooterSection />
        <ScrollToTop />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
