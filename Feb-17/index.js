class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: "",
    };
  }

  postData = (someUser) => {
    // const newUser = {
    //   name: "abhishek",
    //   job: "placement of students",
    // };
    axios.post("https://reqres.in/api/users", someUser).then((res) => {
      console.log(res);
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      job: this.state.job,
    };

    this.postData(user);

    // axios.post("https://reqres.in/api/users", { user }).then((res) => {
    //   console.log(res);
    // });

    console.log("submitting form ", this.state.name, this.state.job);
  };

  changeName = (event) => {
    this.setState((prev) => {
      return {
        name: event.target.value,
      };
    });
    // console.log(event.target.value);
  };

  changeJob = (event) => {
    this.setState((prev) => {
      return {
        job: event.target.value,
      };
    });
    // console.log(event.target.value);
  };

  render() {
    // console.log(this.state);
    return (
      <div className="app-container">
        <div className="alert alert-primary">this is bootstrap</div>
        {/* <form className="" onSubmit={this.submitForm}>
          <div>
            <label>name</label>
            <input
              placeholder="Name"
              value={this.state.name}
              onChange={this.changeName}
            />
          </div>
          <div>
            <label>job</label>
            <input
              placeholder="Job"
              value={this.state.job}
              onChange={this.changeJob}
            />
          </div>
          <button type="submit">submit</button>
        </form> */}
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label>name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.changeName}
            />
          </div>
          <div className="form-group">
            <label>job</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Job"
              value={this.state.job}
              onChange={this.changeJob}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {/* <button onClick={this.postData}>post some data</button> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
