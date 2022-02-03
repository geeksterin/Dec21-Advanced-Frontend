import React, { Component } from "react";
import "./App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { cardHeading: "geeksterrr", x: "yyy" };
  }

  //   if(display === false){
  //       show "second" value
  //   }
  // props = {geek:"ster"}

  someFunc() {
    console.log("I am a geek - ", this.props.geek);
  }

  render() {
    return (
      <div className="card-component">
        <h2>card component - {this.props.name}</h2>
        {this.props.display === false ? this.props.second : this.props.geek}
        {this.someFunc()}
      </div>
    );
  }
}

export default Card;

// const obj = {
//     x : "y"
// }

// obj.x
