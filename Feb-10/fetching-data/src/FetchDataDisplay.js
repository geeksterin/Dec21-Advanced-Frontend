import React, { Component } from "react";
import "./App.css";
import ChildTwo from "./ChildTwo";

class FetchDataDisplay extends Component {
  // url - https://reqres.in/api/users

  constructor() {
    super();
    this.state = {
      data: [{}],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });
    // const x = [
    //   {
    //     name: "abhishek",
    //     age: 25,
    //   },
    //   {
    //     name: "geek",
    //     age: 30,
    //   },
    //   {
    //     name: "geekster",
    //     age: 20,
    //   },
    // ];

    // x.map((element) => {
    //   console.log(element);
    // });

    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ data: result.data });
      });
  };

  displaySomething = () => {
    return <div>bye</div>;
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          hellooo
          <button onClick={this.fetchData}>fetch data</button>
          {this.state.data.map((geekster, index) => {
            console.log("geekster", geekster);
            return (
              <ChildTwo
                key={index}
                first_name={geekster.first_name}
                email={geekster.email}
                img={geekster.avatar}
                last_name={geekster.last_name}
              />
            );
          })}
        </header>
      </div>
    );
  }
}

export default FetchDataDisplay;
