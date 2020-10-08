import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Eligibility from "./components/Eligibility";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/about">
						<About />
					</Route>

					<Route path="/free-assessment-form">
						<Header />
						<Eligibility />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
