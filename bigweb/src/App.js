import React, { Component } from 'react';
import Home from './routes/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
