import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Scene.css";
import Layer from "./Layer";

class Scene extends Component {
  state = {
    layers: this.props.layers
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

  render() {
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
