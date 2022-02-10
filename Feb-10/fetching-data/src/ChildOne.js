import React, { Component } from "react";

export default class ChildOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        i am child 1 - {this.props.count}
        <button onClick={this.props.geekster}>i am child one</button>
      </div>
    );
  }
}
