// const h1 = document.createElement("h1");
// h1.innerText = "this is not JSX";
// document.getElementById("root").appendChild(h1);

const element = (
  <h1>
    <p>JSX</p>
  </h1>
);

console.log(h1);
console.log(element);

class Something extends React.Component {
  // polymorphism
  // this = {}
  constructor() {
    super();
    this.geek = "ster";
    this.state = { name: "this is state" };
  }

  render() {
    return (
      <div>
        <h1>this is someFunc</h1>
      </div>
    );
  }

  someFunc() {
    return (
      <div>
        <h1>this is someFunc</h1>
      </div>
    );
  }
}

class ChildOne extends Something {
  constructor() {
    super();
    this.child = "i am child";
  }
}

const x = new ChildOne();
console.log(x);

ReactDOM.render(<Something />, document.getElementById("root"));
