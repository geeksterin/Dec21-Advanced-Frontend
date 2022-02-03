import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 55, name: "geek" };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    // console.log("increasingggg", this.state.count);
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  decrease() {
    console.log("decreasinggg", this.state.count);
    const newCount = this.state.count - 1;
    this.setState({ count: newCount });
  }

  render() {
    return (
      <div className="counter">
        <h3> counter value = {this.state.count}</h3>
        <button onClick={this.decrease}>decrease</button>
        <button onClick={this.increase}>increase</button>
      </div>
    );
  }
}

export default Counter;
