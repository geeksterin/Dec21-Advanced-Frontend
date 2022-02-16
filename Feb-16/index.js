class App extends React.Component {
  constructor() {
    super();
    this.state = {
      geek: [],
    };
  }

  getDataAxios = () => {
    axios.get("https://reqres.in/api/users").then(
      (geekster) =>
        this.setState((prev) => {
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

  render() {
    return (
      <div className="app-container">
        this is app
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
