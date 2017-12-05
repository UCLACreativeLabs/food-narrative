import React, { Component } from "react";
import "./Caption.css"

class Caption extends Component{
  state = {
    framesClass: "hideFrames",
    text: [],
    textIndex : 1,
  }

  constructor(props){
    super(props);
  };

  // static propTypes = {
  //   text: PropTypes.string,
  // };

  fadeOut = (index) => {
    this.setState({framesClass: "hideFrames"});
    window.setTimeout(()=>{
      if(index) {
        this.setState({framesClass: "showFrames", text: this.props.text, textIndex: index});
      } else {
          this.setState({framesClass: "showFrames", text: this.props.text});
      }
    }, 500);
  };

  componentDidMount() {
    this.fadeOut(0);
    window.addEventListener("keypress", (e) => {
      if(e.which === 32) {
        let index = this.state.textIndex === this.props.text.length - 1 ? 1 : this.state.textIndex  + 1;
        this.fadeOut(index);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.fadeOut(0);
    }
  }

  getClassName = () => {
    return this.props.id == 'H1' ? 'Caption-Home' : 'Caption-Other';
  }

  render(){
    return (
      <div className={"Caption " + this.getClassName() + " " + this.state.framesClass}>
        <h1>{this.state.text[0]}</h1>
        <p>{this.state.text[this.state.textIndex]}</p>
      </div>
    );
  }
}

export default Caption;
