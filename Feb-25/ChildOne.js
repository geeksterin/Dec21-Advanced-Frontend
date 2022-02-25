class ChildOne extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //   <GeekConsumer>
      //     {(someRandomObj) => {
      //       return (
      //         <div>
      //           <h1>i am child 1</h1>
      //           <p>{someRandomObj.name}</p>
      //           <p>{someRandomObj.age}</p>
      //         </div>
      //       );
      //     }}
      //   </GeekConsumer>
      <div>
        <h1>i am child 1</h1>
        <p>{this.context.name}</p>
        <p>{this.context.age}</p>
      </div>
    );
  }
}

ChildOne.contextType = geekContext; // point it to actual context and NOT the consumer
// point the value of this.context
//  inside childOne to the value given in Provider

// return (
//     <div>
//       <h1>i am child 1</h1>
//       {/* <p>{context}</p> */}
//       <p>{this.props.name}</p>
//     </div>
//   );
