import React from "react";
import "./styles.css";

class Sample extends React.Component {
  state = {
    text: " !! working now yay!!!"
  };
  render() {
    return <div className="container">{this.state.text}</div>;
  }
}
export default Sample;
