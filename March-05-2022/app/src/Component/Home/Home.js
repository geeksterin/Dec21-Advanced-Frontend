import React, { Component } from "react";
import Name from "../Name/Name";
import Details from "../Details/Details";

class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <Name />
        </div>

        <div className="row">
          <Details />
        </div>
      </div>
    );
  }
}

export default Home;
