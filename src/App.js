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
import ReadMore from "./components/ReadMore";
import News from "./components/News";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/studyinCanada">
						<ReadMore />
					</Route>
					<Route path="/visitCanada">
						We are sorry this Page is currently Under Maintainance
					</Route>
					<Route path="/canadacitizenship">
						We are sorry this Page is currently Under Maintainance
					</Route>
					<Route path="/immigrationnews">
						<News />
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
