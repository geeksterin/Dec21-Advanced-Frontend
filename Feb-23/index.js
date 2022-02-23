class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0,
      displayChild: false,
    };
  }

  incrementParent = () => {
    this.setState({
      count: this.state.count + 1,
      displayChild: !this.state.displayChild,
    });
  };

  incrementParent2 = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    // called when App comp is displayed
    // on the screen for first time
    console.log("componentDidMount");
    // this.setState({ count: this.state.count + 1 });
  }

  // componentDidUpdate() {
  //   // runs when either state OR props is changed
  //   console.log("parent - UPDATE");
  // }

  render() {
    console.log("render");
    return (
      <div>
        hello i am app - {this.state.count}
        <div>
          <button onClick={this.incrementParent}>increment from parent</button>
          <button onClick={this.incrementParent2}>increment only value</button>
          {this.state.displayChild ? (
            <Counter
              value={this.state.count}
              changeParent={this.incrementParent}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
