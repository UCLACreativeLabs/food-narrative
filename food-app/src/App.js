import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./Components/Container";
import config from "./config.js";
import frame1 from "./images/sample/1.png";
import frame2 from "./images/sample/2.png";
import frame3 from "./images/sample/3.png";
import frame1a from "./images/sample/1a.jpg";
import frame2a from "./images/sample/2a.gif";
import frame3a from "./images/sample/3a.png";

class App extends Component {
  state = {
    containerId: "H1"
  };

  componentDidMount() {
    let stateFlag = 1;
    window.addEventListener("keypress", (e) => {
      if(e.which === 49) {
        this.setState({
          containerId: "H1"
        });
      } else if(e.which === 50) {
        this.setState({
          containerId: "P1"
        });
      } else if(e.which === 51) {
        this.setState({
          containerId: "P2day"
        });
      } else if(e.which === 52) {
        this.setState({
          containerId: "P2"
        });
      } else if(e.which === 53) {
        this.setState({
          containerId: "C1"
        });
      } else if(e.which === 54) {
        this.setState({
          containerId: "C2"
        });
      } else if(e.which === 55) {
        this.setState({
          containerId: "C3"
        });
      } else if(e.which === 56) {
        this.setState({
          containerId: "I1"
        });
      } else if(e.which === 57) {
        this.setState({
          containerId: "I2"
        });
      } else if(e.which === 48) {
        this.setState({
          containerId: "I3"
        });
      }
    });
  }

  changeScene = (sceneName) => {
    // this.setState({
    //   containerId: sceneName,
    // });
  };

  renderContainer() {
    var containerConfig = config.containers.filter(
      c => c.containerId === this.state.containerId
    )[0];
    const { containerId, frames, scene, music, caption } = containerConfig;
    // return <Container containerId={containerConfig.containerId} config={containerConfig}/>
    return (
      <Container
        containerId={containerId}
        frames={frames}
        scene={scene}
        music={music}
        caption={caption}
        changeScene={this.changeScene}
      />
    );
  }

  render() {
    return <div className="App">{this.renderContainer()}</div>;
  }
}

export default App;
