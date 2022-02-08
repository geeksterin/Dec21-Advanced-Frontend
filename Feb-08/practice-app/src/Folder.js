import React, { Component } from "react";
import "./App.css";

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  //   {
  //       name: "src",
  //       children:
  //   }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="Folder">
        <span onClick={this.handleClick}>
          {this.state.isOpen ? (
            <i className="caret down icon"></i>
          ) : (
            <i className="caret right icon"></i>
          )}
          <i className="blue folder icon"></i>
        </span>
        {this.props.name}
        {this.state.isOpen ? this.props.children : null}
      </div>
    );
  }
}

export default Folder;
