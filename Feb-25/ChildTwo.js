class ChildTwo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        child 2 -{this.context.name}
        <div>
          grandChild -
          <GrandChildOne />
          <button onClick={() => this.context.changeFn()}>click</button>
          {/* <button onClick={() => this.props.callback()}>click</button> */}
        </div>
      </div>
    );
  }
}

ChildTwo.contextType = geekContext;
