class GrandChildOne extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return <div>grand -{/* {this.context.name} */}</div>;
    return (
      <GeekConsumer>
        {(someRandomObj) => {
          return <div>grand -{someRandomObj.age}</div>;
        }}
      </GeekConsumer>
    );
  }
}

{
  /* GrandChildOne.contextType = geekContext; */
}
