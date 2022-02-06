import React, { Component } from 'react';
// stateless : Stateless component is the component which don't have it's 
// own state.
export default class Child extends Component {
  render() {
    return <div>{this.props.count}</div>;
  }
}
