import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Scene.css";
import Layer from "./Layer";
import Caption from "./Caption";

class Scene extends Component {
  state = {
    layers: this.props.layers,
    x: 0,
    y: 0,
    framesClass: "hideFrames",
  };

  static propTypes = {
    layers: PropTypes.array,
    caption: PropTypes.array,
    id: PropTypes.string,
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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.fadeOut();
    }
  }

  _onMouseMove(e){
    this.setState({
      layers: this.props.layers,
      x: e.screenX,
      y: e.screenY
    });
    // console.log(e.screenX + " " + e.screenY);
  }

  // add component

  render() {

    return (
      <div className={"Scene " + this.state.framesClass + " " + this.props.id} onMouseMove={this._onMouseMove.bind(this)}>
        {this.props.layers
          ? this.props.layers.map(layer => (
              <Layer
                order={layer.order}
                image={layer.image}
                elements={layer.elements}
                x={this.state.x}
                y={this.state.y}
                changeScene={this.props.changeScene}
              />
            ))
          : null}
      </div>
    );
  }
}
// hide overflow
export default Scene;
