import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./Components/Container";
import frame1 from "./images/sample/1.png";
import frame2 from "./images/sample/2.png";
import frame3 from "./images/sample/3.png";
import frame1a from "./images/sample/1a.jpg";
import frame2a from "./images/sample/2a.gif";
import frame3a from "./images/sample/3a.png";

const state1 = {
  containerId: "E1",
  frames: [
    {
      image: frame1,
      text: "First Scene"
    },
    {
      image: frame2
    },
    {
      image: frame3
    }
  ],
  scene: null,
  music: null
};

const state2 = {
  containerId: "E2",
  frames: [
    {
      image: frame1a,
      text: "First Scene"
    },
    {
      image: frame2a
    },
    {
      image: frame3a
    }
  ],
  scene: null,
  music: null
};

class App extends Component {
  state = {
    containerId: "E1",
    frames: [
      {
        image: frame1,
        text: "First Scene"
      },
      {
        image: frame2
      },
      {
        image: frame3
      }
    ],
    scene: null,
    music: null
  };

  componentDidMount() {
    let stateFlag = 1;
    window.addEventListener("click", () => {
      if(stateFlag === 1) {
        this.setState(state2);
        stateFlag = 2;
      } else {
        this.setState(state1);
        stateFlag = 1;
      }
    });
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Container
        containerId={this.state.containerId}
        frames={this.state.frames}
      />
    );
  }
}

export default App;
