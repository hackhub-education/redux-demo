import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          count: 0
      }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux Intro</h2>
        </div>
        <h3>Parent Component</h3>
        <Counter 
          counter={this.state.count} 
          clickBtn={()=>{this.setState({count: this.state.count+1})}}
        />
      </div>
    );
  }
}

export default App;
