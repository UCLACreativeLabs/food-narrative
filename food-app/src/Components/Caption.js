import React, { Component } from "react";
import "./Caption.css"

class Caption extends Component{

  constructor(props){
    super(props);
  };

  // static propTypes = {
  //   text: PropTypes.string,
  // };

  render(){
    return (
      <div className="Caption">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Caption;
