// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Child  from './Child';
// statefull: Statefull component is the component which has its own state
// and it's manage the state updation inside the component.
class Home extends Component { 
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // this.incrementCounter = this.incrementCounter.bind(this);
  }


  incrementCounter() {
    this.setState({count : this.state.count + 1})
    //this.setState((prevState) => ({count : prevState.count + 1}))
  }
  render(){
    return (
      <div className="App">
        <Child count={this.state.count} />
        <div><button onClick={this.incrementCounter.bind(this)}>+</button></div>
      </div>
    );
  }
  
}

export default Home;


// props drilling: Process of passing data from Parent Component to
// Child Component 


// stateless Component:
// statefull Component: