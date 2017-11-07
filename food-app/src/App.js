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
      <div className="Control">
        {this.renderControl()}
      </div>
    );
  }
}

export default App;
