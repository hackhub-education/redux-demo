import React, { Component } from 'react';
import './App.css';

class Counter extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div className="Counter">
          <h3>Child Component</h3>
          <p>Current counter is : {this.props.counter}</p>
          <button 
            onClick={this.props.clickBtn}
            >
            +1 
          </button>
      </div>
    );
  }
}

export default Counter;
