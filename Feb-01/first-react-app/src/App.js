import React, { Component } from "react";
import Card from "./Card";
import Info from "./Info";

class App extends Component {
  // constructor(x, y, z) {
  //   super(someArguments);
  // }

  render() {
    return (
      <div className="App">
        <Card
          name="geekster"
          age={26}
          YOE={10}
          geek="geekster"
          hello="kjnasiansian"
        />
        <Card name="geek" age={22} YOE={100000} geek="abhishek" />
      </div>
    );
  }
}

// new Card("geekster", age:26, YOE:10)

export default App;

// JSX = JS XML

// {firstTeam: "MIA" ; secondTeam : "BOS"}
