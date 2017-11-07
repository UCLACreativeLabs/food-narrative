import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Layer.css";

class Layer extends Component {
  state = {
    image: this.props.image,
    elements: this.props.elements,
  }

  static propTypes = {
    order: PropTypes.number,
    image: PropTypes.string,
    elements: PropTypes.array,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.image !== this.props.image) {
      window.setTimeout(()=>{
        this.setState({image: this.props.image, text: this.state.text});
      }, 1000);
    }
  }
  getLayerStyle = () => {
    return {
      background: "url(" + this.state.image + ") center center",
      backgroundSize: this.state.image ? "cover" : "cover",
    };
  };

  render() {
    return <div className="Layer" style={this.getLayerStyle()}/>;
  }
}

export default Layer;
