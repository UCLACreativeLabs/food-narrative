import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./Components/Container";
import config from "./config.js"
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
    containerId: "E1"
  };

  componentDidMount() {
    let stateFlag = 1;
    window.addEventListener("click", () => {
      if(stateFlag === 1) {
        this.setState({
          containerId: "E2"
        });
        stateFlag = 2;
      } else {
        this.setState({
          containerId: "E2"
        });
        stateFlag = 1;
      }
    });
  }

  renderContainer(){
    var containerConfig = config.containers.filter(c => c.containerId === this.state.containerId)[0];
    return <Container containerId={containerConfig.containerId} config={containerConfig}/>
  }

  render() {
    return (
      <div className="App">
        {this.renderContainer()}
      </div>
    );
  }
}

export default App;
