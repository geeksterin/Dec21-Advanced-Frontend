class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "geek",
    };
  }

  componentDidMount() {
    console.log("child - component did mount");
  }

  componentWillUnmount() {
    // polymorphism
    // called when component is being unmounted/removed from screen
    console.log("unmounting!!!!");
  }

  // componentDidUpdate(param1, param2) - param1 is always previous props
  // param2 is always previous state

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps - ", prevProps.value);
    console.log("pre state - ", prevState);
    console.log("current prop is - ", this.props.value);
    // runs when either state OR props is changed
    console.log("child - UPDATE");
    document.getElementById("update").innerText = prevProps.value;
    // this.setState({ name: "abhishek" });
  }

  render() {
    console.log("counter-render");
    return (
      <div>
        Counter component - {this.props.value}
        <div id="update"></div>
        <button onClick={this.props.changeParent}>change from child</button>
      </div>
    );
  }
}
