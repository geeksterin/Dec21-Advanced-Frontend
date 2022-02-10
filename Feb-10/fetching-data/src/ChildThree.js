import React, { Component } from "react";

export default class ChildThree extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>i am child 3 - {this.props.count}</div>;
  }
}
