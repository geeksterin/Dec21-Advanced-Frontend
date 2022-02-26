import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Input from './Input.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }

  handleChange = (new_value) => {
    this.setState({
      inputValue: new_value
    });
  }

  
  render() {
    return (
      <div className="App">
      <header className="App-header">

        <h1>Hi geeks!</h1>
        <Input onValueChange={this.handleChange} />
        <p>{this.state.inputValue}</p>
      </header>
    </div>
    );
  }
}

export default App;
