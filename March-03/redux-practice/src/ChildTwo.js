import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class ChildTwo extends Component {
  render() {
    // console.log("child render - ", this.props);
    // console.log("child render - ", this.state.childName);
    return (
      <div className="App">
        <header className="App-header">
          this is the child 2 component -{this.props.name}
          <input placeholder="child 2" />
          <button onClick={() => {}}>submit</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (reduxStoreObject, currComponentProps) => {
  const name = reduxStoreObject.name;
  return {
    name,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const dispatchActionFromChild = (newName) => {
    const actionObj = {
      type: "CHANGE_NAME",
      payload: newName,
    };
    dispatch(actionObj);
  };

  return {
    geekDispatch: dispatchActionFromChild,
  };
};

export default connect(mapStateToProps, null)(ChildTwo);
