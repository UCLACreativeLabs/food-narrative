import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Container.css";
import Frame from "./Frame";
import Scene from "./Scene";
import Caption from "./Caption";
// import Coordinates from "./Coordinates";

// This is the parent container

class Container extends Component {
  state = {
    framesClass: "hideFrames",
    audio: null,
  };

  static propTypes = {
    containerId: PropTypes.string,
    frames: PropTypes.array,
    scene: PropTypes.object,
    music: PropTypes.string,
    caption: PropTypes.array,
    changeScene: PropTypes.function,
  };


  fadeOut = () => {
    this.setState({framesClass: "hideFrames"});
    window.setTimeout(()=>{
      this.setState({framesClass: "showFrames"});
    }, 2000);
  };

  componentDidMount() {
    this.fadeOut();
    var audio = new Audio(this.props.music);
    audio.loop = true;
    audio.play();
    this.setState({
      audio: audio,
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.containerId !== this.props.containerId) {
      this.fadeOut();
      console.log(this.state.audio);
      this.state.audio.pause();
      var audio = new Audio(nextProps.music);
      audio.loop = true;
      audio.play();
      this.setState({
        audio: audio,
      });
    }
  }

  render() {
    // <div className={"Container__frames " + this.state.framesClass}>
    //   <Frame image={frames[0].image} text={frames[0].text} />
    //   <Frame image={frames[1].image} text={frames[1].text} />
    //   <Frame image={frames[2].image} text={frames[2].text} />
    // </div>
    console.log(this.props.containerId, this.props.frames);
    const { containerId, frames, scene, music, caption } = this.props;
    return (
      <div className="Container">
        <Scene layers={this.props.scene.layers} caption={this.props.caption} id={this.props.containerId} changeScene={this.props.changeScene}/>
        <Caption text={caption} id={containerId}/>
      </div>
    );
  }
}

export default Container;
