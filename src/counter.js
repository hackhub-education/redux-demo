import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import store from './store';

class Counter extends Component {
 addCounter = () => {
     store.dispatch({type: 'ADD'});
     //console.log(store.getState());
 }

  render() {
    return (
      <div className="Counter">
          <h3>Child Component</h3>
          <p>Current counter is : {this.props.counter}</p>
          <button
            onClick={()=>{
                this.addCounter();
            }}
          >
            +1 
          </button>
      </div>
    );
  }
}

function mapStateToProps(store) {
    return { counter: store };
}

export default connect(mapStateToProps)(Counter);