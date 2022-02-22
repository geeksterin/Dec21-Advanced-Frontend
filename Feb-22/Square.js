class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.props.changeAppState}>
          {this.props.value}
        </button>
      </div>
    );
  }
}
