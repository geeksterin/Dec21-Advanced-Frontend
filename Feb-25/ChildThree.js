class ChildThree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>i am child 3</h1>
        <p>child 3 name is - {this.context.name}</p>
        <p>{this.context.age}</p>
      </div>
    );
  }
}

ChildThree.contextType = geekContext; // point it to actual context and NOT the consumer
