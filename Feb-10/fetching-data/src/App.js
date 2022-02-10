import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log("this is app component");
  }

  changeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          count value is - {this.state.count}
          <ChildOne geekster={this.changeCount} count={this.state.count} />
          <ChildTwo count={this.state.count} />
          <ChildThree count={this.state.count} />
          <button onClick={this.changeCount}>change count</button>
        </header>
      </div>
    );
  }
}

export default App;
