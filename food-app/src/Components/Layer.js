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
    //coordinates from Scene
    x: PropTypes.number,
    y: PropTypes.number
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.image !== this.props.image) {
      window.setTimeout(()=>{
        this.setState({image: this.props.image, text: this.state.text});
      }, 1000);
    }
    // if((nextProps.x !== this.props.x) || (nextProps.y !== this.props.y)){
    //   this.getLayerStyle();
    // }

  }

  getLayerStyle = () => {

    var order = this.props.order;
    var x = this.props.x;
    var y = this.props.y;
    console.log(x + " " + y + " " + order);

    return {
      background: "url(" + this.state.image + ") center center",
      backgroundSize: this.state.image ? "cover" : "cover",
      transform: "translateX(" + x * 0.25 * order + "px) translateY(" + y * 0.25 * order + "px)",
    };

  };

  render() {
    return <div className="Layer" style={this.getLayerStyle()} />;
  }
}

export default Layer;
