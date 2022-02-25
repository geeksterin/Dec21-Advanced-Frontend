class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "geek",
      age: 25,
      changeFn: this.changeState,
    };
  }

  changeState = () => {
    this.setState({
      name: "adarsh",
      age: 70,
    });
  };

  render() {
    // const obj = {
    //   name: "geek",
    //   age: 25,
    // };

    // const newObj = {
    //   name: "geek",
    //   age: 25,
    //   callback: this.changeState,
    // };

    return (
      <div>
        hello i am app
        <button onClick={() => this.changeState()}>change parent state</button>
        <GeekProvider value={this.state}>
          {/* // value can be anything, obj ,array ,string */}
          <ChildOne />
          {/* <ChildTwo callback={this.changeState} /> */}
          <ChildTwo />
          <ChildThree />
        </GeekProvider>
      </div>
    );
  }
}

// GeekProvider(props){
//     return(
//         <>
//         {children}
//         <>
//     )
// }

ReactDOM.render(<App />, document.getElementById("root"));
