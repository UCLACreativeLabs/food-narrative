import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Scene.css";
import Layer from "./Layer";

class Scene extends Component {
  state = {
    layers: this.props.layers,
    // x: 0,
    // y: 0
  };

  static propTypes = {
    layers: PropTypes.array
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.image !== this.props.image) {
      window.setTimeout(() => {
        this.setState({ image: this.props.image, text: this.state.text });
      }, 1000);
    }
  }

  // _onMouseMove(e){
  //   this.setState({
  //     layers: this.props.layers,
  //     x: e.screenX,
  //     y: e.screenY
  //   });
  // }

  render() {
    // const { l, x, y } = this.state;
    return (
      <div className="Scene">
        {this.props.layers
          ? this.props.layers.map(layer => (
              <Layer
                order={layer.order}
                image={layer.image}
                elements={layer.elements}
              />
            ))
          : null}

      </div>
    );
  }
}

export default Scene;
