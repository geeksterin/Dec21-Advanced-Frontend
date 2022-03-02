import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseActionFn, decreaseAction } from "../actions/actions";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      amount: 0,
    };
  }

  dispatchIncrease = () => {
    this.props.inc();
  };

  dispatchDecrease = () => {
    this.props.dec(this.state.amount);
  };

  render() {
    return (
      <div>
        <button onClick={this.dispatchDecrease}>decrease</button>
        <input
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
        {/* {this.state.count} */}
        {this.props.geekCount}
        <button onClick={this.dispatchIncrease}>increase</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStoreObject, props) => {
  console.log("reduxStoreObject- ", reduxStoreObject);

  return {
    geekCount: reduxStoreObject.reduxCount,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const inc = () => {
    // const increaseAction = {
    //   type: "INCREASE",
    // };
    dispatch(increaseActionFn());
  };

  const dec = (someDynamicAmount) => {
    dispatch(decreaseAction(someDynamicAmount));
  };

  return {
    inc, // = inc: inc
    dec, // = dec: dec
    name: "abhishek",
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// connect(fn1, fn2)(Component);
