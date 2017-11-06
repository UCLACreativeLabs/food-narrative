import React, { Component } from "react";
import "./Container.css";
import Frame from "./Frame";

// This is the parent container

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <Frame name="Rishabh" />
        <Frame name="Rishabh" />
        <Frame name="Rishabh" />
      </div>
    );
  }
}

export default Container;
