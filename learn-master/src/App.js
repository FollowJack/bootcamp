import React, { Component } from 'react';
import './App.css';
import Iframe from 'react-iframe';

class App extends Component {
  constructor (probs) {
    super(probs)
    const youtubeBaseUrl = 'http://www.youtube.com/embed?listType=search&list='
    const wikipediaBaseUrl = 'https://en.wikipedia.org/wiki/'
    const initialSearchTearm = 'How to learn faster?'
    this.state = {
      searchTearm: initialSearchTearm,
      youtubeBaseUrl: youtubeBaseUrl,
      youtubeUrl : youtubeBaseUrl + initialSearchTearm,
      wikipediaBaseUrl: wikipediaBaseUrl,
      wikipediaUrl : wikipediaBaseUrl + initialSearchTearm
    }
  }

  handleInput (input) {
    this.setState({
      searchTearm: input
    })
  }


  render() {
    return (
      <div className='App'>
        <div className='container-fluid'>
          <header className=''>
            <br></br>
            <div className='form-group'>
              <label>Tell me what you want to know
            </label>
              <input value={this.state.searchTearm} onChange={this.handleInput} type='text' className='form-control' id='App-knowledge'></input>
            </div>
          </header>
          <div className='App-search-content row'>
            <Iframe url={this.state.youtubeUrl}
                position="absolute"
                width="100%"
                id="myId"
                className="col-xs-4"
                height="100%"
                allowFullScreen/>
            <Iframe url={this.state.wikipediaUrl}
                position="absolute"
                width="100%"
                id="myId2"
                className="col-xs-4"
                height="100%"
                allowFullScreen/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
