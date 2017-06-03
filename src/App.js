import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux Intro</h2>
        </div>
        <h3>Parent Component</h3>
        <Counter />
      </div>
    );
  }
}

export default App;
