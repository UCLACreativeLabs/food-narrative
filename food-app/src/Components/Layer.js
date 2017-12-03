import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Layer.css";

// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

// deal with the page getting resized or scrolled
// window.addEventListener("scroll", updatePosition, false);
// window.addEventListener("resize", updatePosition, false);

class Layer extends Component {
  state = {
    image: this.props.image,
    elements: this.props.elements,
    height: 0,
    width: 0,
    xpos: 0,
    ypos: 0
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
  }

  // not responsive to changing width after render
  componentDidMount(){

    var element = document.getElementsByClassName("Scene")[0];
    var h = element.offsetHeight;
    var w = element.offsetWidth;
    var x = getPosition(element).x;
    var y = getPosition(element).y;

    var newState = {
      image: this.props.image,
      elements: this.props.elements,
      height: h,
      width: w,
      xpos: x,
      ypos: y
    }

    this.setState(newState);

  }

  getLayerStyle = () => {

    var order = this.props.order;
    var x = this.props.x;
    var y = this.props.y;

    var width = this.state.width/2;
    var height = this.state.height/2;

    var centerX = this.state.xpos + width;
    var centerY = this.state.ypos + height;

    var distX = centerX - x;
    var distY = centerY - y;

    return {
      background: "url(" + this.state.image + ") center center",
      backgroundSize: this.state.image ? "cover" : "cover",
      transform: "translateX(" + distX * -0.05 * order + "px) translateY(" + distY * -0.05 * order + "px)"
    };

  };

  render() {
    return <div className="Layer" style={this.getLayerStyle()} />;
  }
}

export default Layer;
