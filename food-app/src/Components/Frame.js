import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Frame.css";

class Frame extends Component {
  state = {
    image: this.props.image,
    text: this.props.text,
  }

  static propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.image !== this.props.image) {
      window.setTimeout(()=>{
        this.setState({image: this.props.image, text: this.state.text});
      }, 1000);
    }
  }
  getFrameStyle = () => {
    return {
      background: "url(" + this.state.image + ") center center",
      backgroundSize: this.state.image ? "cover" : "cover",
    };
  };

  render() {
    return <div className="Frame" style={this.getFrameStyle()}/>;
  }
}

export default Frame;
