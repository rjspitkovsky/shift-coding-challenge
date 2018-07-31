import React, { Component } from 'react';
import './App.css';
import Timer from './timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, world </h1>
        <Timer />
      </div>
    );
  }
}

export default App;
