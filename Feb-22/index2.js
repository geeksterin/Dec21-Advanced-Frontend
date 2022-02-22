class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: Array(9).fill(null),
      flag: true,
      // when flag is true - X will play, else O will play
    };
  }

  // Array(x) - create a array of size x
  // array.fill(y) - it will fill all elements of that array as y

  handleClick = (i) => {
    console.log("this is inside app", i);
    const sqaureList = this.state.list;
    if (sqaureList[i] === null) {
      if (this.state.flag === true) {
        sqaureList[i] = "X";
      } else {
        sqaureList[i] = "O";
      }
      const newFlag = !this.state.flag;
      this.setState({ list: sqaureList, flag: newFlag });
    } else {
      alert("this is not allowed");
    }
  };

  //   random = () => {
  //     const r = Math.floor(Math.random() * 9);
  //     // const sqaureList = this.state.list;
  //     // if (this.state.list[r] === null) {
  //     //   this.handleClick(r);
  //     // } else {
  //     //   this.random();
  //     // }
  //     const sqaureList = this.state.list;
  //     if (sqaureList[r] === null) {
  //       sqaureList[r] = "O";
  //       //   if (this.state.flag === false) {
  //       //     sqaureList[r] = "X";
  //       //   } else {
  //       //     sqaureList[r] = "O";
  //       //   }
  //       //   const newFlag = !this.state.flag;
  //       this.setState({ list: sqaureList });
  //     } else {
  //       console.log("in else");
  //       this.random();
  //     }
  //   };

  renderSqaure = (x) => {
    return (
      <Square
        value={this.state.list[x]}
        changeAppState={() => this.handleClick(x)}
      />
    );
  };

  checkWinner = () => {
    let winnerName = "";
    const lines = [
      [0, 1, 2], // indexes of this.state.list array
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // const x = [1,2,3,4]
    // // const a = x[0]
    // // const b = x[1]
    // const [a,b,c,d] = x

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //   console.log(a, b, c);
      const s = this.state.list;
      if (s[a] !== null && s[a] === s[b] && s[a] === s[c]) {
        if (this.state.flag === true) {
          winnerName = "O";
        } else {
          winnerName = "X";
        }
      }
    }
    return `winner is  ${winnerName}`;
  };

  render() {
    console.log(this.state.flag);
    return (
      <div>
        <div className="row">
          {this.renderSqaure(0)}
          {this.renderSqaure(1)}
          {this.renderSqaure(2)}
        </div>
        <div className="row">
          {this.renderSqaure(3)}
          {this.renderSqaure(4)}
          {this.renderSqaure(5)}
        </div>
        <div className="row">
          {this.renderSqaure(6)}
          {this.renderSqaure(7)}
          {this.renderSqaure(8)}
        </div>
        <div>{this.checkWinner()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
