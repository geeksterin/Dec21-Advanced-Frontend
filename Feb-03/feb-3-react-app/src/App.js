import React, { Component } from "react";
import "./App.css";
import Card from "./Card.js";
import Counter from "./Counter/Counter";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "bill gates" };
    this.changeState = this.changeState.bind(this);
    // this.anyFunctionName = this.anyFunctionName.bind(this)
  }

  changeState() {
    console.log("inside my app component");
    console.log(this.state.name);
  }

  render() {
    return (
      <div className="App-12345">
        <h1>App component - {this.state.name}</h1>
        {/* <button onClick={this.changeState}>click me</button>
        <Card
          name={this.state.name}
          geek="kaknskas"
          second="sharma"
          display={false}
        />
        <Card
          name={this.state.name}
          geek="kane"
          second="khali"
          display={false}
        />
        <Card name={this.state.name} geek="dhoni" /> */}

        <Counter />
      </div>
    );
  }
}

export default App;
