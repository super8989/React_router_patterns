import React, { Component } from "react";
import Food from "./Food";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Route
					path='/food/:name'
					render={routeProps => <Food authenticated={true} {...routeProps} />}
				/>
				{/* <Route path='/food/:name' component={Food} /> */}
			</div>
		);
	}
}

export default App;
