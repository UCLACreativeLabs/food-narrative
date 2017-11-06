import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./Components/Container";
import config from "./config.js"

class App extends Component {
  renderContainer(){
    var containerConfig = config.containers.filter(c => c.containerId === "E1");
    return <Container config={containerConfig}/>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Food Narratives</h1>
        </header>
        {this.renderContainer()}
      </div>
    );
  }
}

export default App;
