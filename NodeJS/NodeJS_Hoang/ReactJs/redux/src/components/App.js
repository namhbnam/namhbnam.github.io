import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Redux</h1>
				</header>
				<p className="App-intro">
					<p>This is a tutorial React app with Redux</p>
				</p>
				<h2>List of foods:</h2>
				<hr />
				<h2>Food details:</h2>
			</div>
		);
	}
}

export default App;
