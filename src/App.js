import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Redux Intro</h2>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
