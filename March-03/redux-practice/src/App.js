import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Child from "./Child";
import ChildTwo from "./ChildTwo";

class App extends Component {
  render() {
    console.log("app comp - ", this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>parent component- {this.props.someKey}</p>
          <Child age="99" />
          <ChildTwo />
        </header>
      </div>
    );
  }
}

// map the state of redux to the props of your component
const mapStateToProps = (reduxStoreObject, currComponentProps) => {
  // console.log("reduxStoreObject - ", reduxStoreObject);
  const nameValue = reduxStoreObject.name;
  // console.log({ nameValue });
  return {
    someKey: nameValue,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    abhishek: "geekgeek",
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
