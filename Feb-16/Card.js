class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOflikes: 4,
    };
  }

  inc = () => {
    this.setState((prev) => {
      return {
        numberOflikes: prev.numberOflikes + 1,
      };
    });
  };

  dec = () => {
    this.setState((prev) => {
      return {
        numberOflikes: prev.numberOflikes - 1,
      };
    });
  };

  render() {
    console.log(this.props);
    // const obj = {
    //   avatar: "https://reqres.in/img/faces/1-image.jpg",
    //   email: "george.bluth@reqres.in",
    //   first_name: "George",
    //   id: 1,
    //   last_name: "Bluth",
    // };

    return (
      <div className="card-container">
        <img src={this.props.avatar} />
        <p className="names">
          <small>{this.props.first_name}</small>
          <small>{this.props.last_name}</small>
        </p>
        <p className="email">{this.props.email}</p>
        <div className="likes">
          <button onClick={this.inc}>👍🏻</button>
          {this.state.numberOflikes}
          <button onClick={this.dec}>👎🏻</button>
        </div>
      </div>
    );
  }
}
