import React, { Component, useState } from "react";
import "../styles/App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      renderPara: false
    };
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}

        {this.state.renderPara ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : (
          <button
            id="click"
            onClick={() => {
              this.setState({
                renderPara: true
              });
            }}
          >
            click
          </button>
        )}
      </div>
    );
  }
}
export default App;
