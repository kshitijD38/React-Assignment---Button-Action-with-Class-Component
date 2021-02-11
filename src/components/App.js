import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
  //   constructor(props) {
	// 	super(props);
	// };

	state = {para:""};

	handleClick = () =>{
		this.setState({
			para:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
		});
	};

    render() {
    	return(
    		<div id="main">
			{ /* Do not remove this main div!! */ }
			<button id="click" onClick={this.handleClick}>
			Click
			</button>
        		<p id="para">{this.state.para}</p>
    		</div>
    	);
    }
}


export default App;

