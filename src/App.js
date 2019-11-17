import React, { Component } from "react";
import Food from "./Food";
import Meal from "./Meal";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* <Route path='/food/:name' component={Food} /> */}
				<Route
					exact
					path='/food/:name'
					render={routeProps => <Food {...routeProps} />}
				/>
				<Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
			</div>
		);
	}
}

export default App;
