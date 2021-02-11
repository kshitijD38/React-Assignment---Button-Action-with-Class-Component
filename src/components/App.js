import React, { Component, useState } from "react";
import '../styles/App.css';
class App extends Component {
    constructor(props) {
    super(props);
    this.state = { para: "",
            disp : "none"
    };
  };
  handleClick = () => {
    this.setState({
      disp : "block"
    });
  };
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.handleClick}>
          Click
        </button>
        <p id="para" style={{display: this.state.disp}}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      </div>
    );
  }
}
export default App;
