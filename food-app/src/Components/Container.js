import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Container.css";
import Frame from "./Frame";
import Scene from "./Scene";
// import Coordinates from "./Coordinates";

// This is the parent container

class Container extends Component {
  state = {
    framesClass: "showFrames",
  };

  static propTypes = {
    containerId: PropTypes.string,
    frames: PropTypes.array,
    scene: PropTypes.object,
    music: PropTypes.string
  };


  fadeOut = () => {
    this.setState({framesClass: "hideFrames"});
    window.setTimeout(()=>{
      this.setState({framesClass: "showFrames"});
    }, 1000);
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.containerId !== this.props.containerId) {
      this.fadeOut();
    }
  }

  render() {
    console.log(this.props.containerId, this.props.frames);
    const { containerId, frames, scene, music } = this.props;
    return (
      <div className="Container">
        <div className={"Container__frames " + this.state.framesClass}>
          <Frame image={frames[0].image} text={frames[0].text} />
          <Frame image={frames[1].image} text={frames[1].text} />
          <Frame image={frames[2].image} text={frames[2].text} />
        </div>
        <Scene layers={this.props.scene.layers}/>
        
      </div>
    );
  }
}

export default Container;
