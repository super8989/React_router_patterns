import React, { Component } from "react";
import Food from "./Food";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Route path='/food/kale' render={() => <Food name='kale' />} />
				<Route path='/food/chicken' render={() => <Food name='chicken' />} />
				<Route
					path='/food/pineapple'
					render={() => <Food name='pineapple' />}
				/>
			</div>
		);
	}
}

export default App;
