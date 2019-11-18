import React, { Component } from "react";
import Food from "./Food";
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					{/* <Route path='/food/:name' component={Food} /> */}
					<Route
						exact
						path='/food/:name'
						render={routeProps => <Food {...routeProps} />}
					/>
					<Route
						exact
						path='/food/:foodName/drink/:drinkName'
						component={Meal}
					/>
					{/* <Route
						exact
						path='/'
						render={routeProps => <FoodSearch {...routeProps} />}
					/> */}
					<Route exact path='/' component={FoodSearch} />
					<Route render={() => <h1>Error Not Found</h1>} />
				</Switch>
			</div>
		);
	}
}

export default App;
