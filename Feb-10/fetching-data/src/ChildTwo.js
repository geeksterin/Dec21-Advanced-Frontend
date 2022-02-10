import React, { Component } from "react";

export default class ChildTwo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <small>{this.props.first_name}</small>
        <small>{this.props.last_name}</small>
        <img src={this.props.img} />
        <p>{this.props.email}</p>
      </div>
    );
  }
}
