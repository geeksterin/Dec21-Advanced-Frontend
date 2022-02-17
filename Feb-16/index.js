class App extends React.Component {
  constructor() {
    super();
    this.state = {
      geek: [],
      totalCount: 0,
      firstValue: 0,
    };
  }

  getDataAxios = () => {
    axios.get("https://reqres.in/api/users").then(
      (geekster) =>
        this.setState(() => {
          return {
            geek: geekster.data.data,
          };
        })
      //   console.log(geekster)
    );
  };

  componentDidMount() {
    this.getDataAxios();
  }

  convertToCards = () => {
    // for (let i = 0; i < this.state.geek.length; i++) {
    //   console.log(this.state.geek[i]);
    // }

    return this.state.geek.map((item) => (
      <Card
        avatar={item.avatar}
        first_name={item.first_name}
        last_name={item.last_name}
        email={item.email}
        changeParentCount={this.updateParent}
      />
    ));
  };

  //   [
  //       <Card />,
  //       <Card/>,
  //       <Card/>,
  //       <Card/>,
  //       <Card/>,
  //   ]

  deleteCard = () => {
    this.setState((prev) => {
      console.log(prev);
      //   const x = Array.from(prev.geek);
      const x = [...prev.geek];
      x.splice(1, 1);
      console.log(x);
      return {
        geek: x,
      };
    });
  };

  updateParent = () => {
    console.log("this is inside parent");
    this.setState((prevState) => {
      return {
        totalCount: prevState.totalCount + 1,
      };
    });
  };

  render() {
    return (
      <div className="app-container">
        this is app
        <h1>{this.state.totalCount}</h1>
        <div>
          <button onClick={this.getDataAxios}>axios</button>
          <button onClick={this.deleteCard}>delete card</button>
        </div>
        <div className="card-list">
          {/* {[1, 2, "geekster"]}
          {[<h1>hello</h1>, <h1>bye</h1>]} */}

          {this.convertToCards()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
