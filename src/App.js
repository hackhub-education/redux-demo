import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
import Counter from './counter';

class App extends Component {
   addCounter = () => {
     store.dispatch({type: 'ADD'});
 }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Redux Intro</h2>
          </div>
          <h3>Parent Component</h3>
          <button onClick={()=>{this.addCounter()}}>
            +1 
          </button>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
