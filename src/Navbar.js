import React, { Component } from "react";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		alert("Logged You In");
		this.props.history.push("food/salmon");
	}

	render() {
		return (
			<div>
				<button onClick={this.handleLogin}>Log in</button>
			</div>
		);
	}
}

export default Navbar;
