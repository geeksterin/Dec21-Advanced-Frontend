class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [
        { PHOTOCOPIERrr: "PHOTOCOPIER abhishek" },
        { AIR_CONDITIONING: "AIR_CONDITIONING" },
        { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
        { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },
      ],
    };
  }

  displayArray = (arr) => {
    // const result = [];
    // for (let i = 0; i < arr.length; i++) {
    //   const obj = arr[i];
    //   for (let item in obj) {
    //     // console.log("key - ", item); // item is the key in obj
    //     // console.log("value - ", obj[item]);
    //     const key = item;
    //     const value = obj[item];
    //     const divStructure = (
    //       <div>
    //         <small>{key}</small> : <small>{value}</small>
    //       </div>
    //     );
    //     result.push(divStructure);
    //   }
    // }
    // console.log(result);
    // return result;

    // [1,2,3,4]
    const result = arr.map((elemOfArray) => {
      // const x = []
      console.log(elemOfArray);
      for (let item in elemOfArray) {
        const key = item;
        const value = elemOfArray[item];
        const divStructure = (
          <div>
            <small>{key}</small> : <small>{value}</small>
          </div>
        );
        return divStructure;
      }
      //   return x
    });

    console.log("result - ", result);
    return result;
  };

  render() {
    return (
      <div>
        hello i am app
        <div>
          <small>key</small> : <small>value</small>
        </div>
        <div>{this.displayArray(this.state.arr)}</div>
        {/* <div>{[<div>hello</div>, <div>bye</div>]}</div> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
