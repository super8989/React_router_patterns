import React, { Component } from "react";
import Food from "./Food";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Food name='Kale' />
			</div>
		);
	}
}

export default App;
