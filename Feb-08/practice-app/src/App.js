import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FuncComponent from "./FuncComponent";
import Folder from "./Folder";
import File from "./File";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   finalData: {}
    // }
  }

  render() {
    return (
      <div className="App">
        {/* <i className="blue folder icon"></i>
        <i className="caret down icon"></i> 
        <i className="caret right icon"></i>
        <i className="blue folder icon"></i>
        FolderName
        geekster
        <FuncComponent name="abhishek" /> */}
        <div className="container">
          {/* <Folder name="src" />
          <Folder name="node_modules" />
          <Folder name="public" /> 
      <File name="music.mp3" /> */}

          {/* <Folder name="public">
            {/* <div>
              <p>
                njansjan
                <h1>hello</h1>
                <h1>bye</h1>
              </p>
            </div> 
          </Folder> */}

          <Folder name="src">
            {/* <div>anushka</div>
            <p>direct</p> */}
            <Folder name="virat">
              <Folder name="namika">
                <File name="ZNMD.mp4" />
                <File name="dhoni.jpeg" />
                <File name="sehwag.png" />
              </Folder>
              <Folder name="dhoni" />
            </Folder>
            <File name="ZNMD.mp4" />
            <File name="dhoni.jpeg" />
            <File name="sehwag.png" />
          </Folder>
        </div>
      </div>
    );
  }
}

export default App;
