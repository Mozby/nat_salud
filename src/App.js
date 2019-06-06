import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Service from "./components/pages/service";
import about from "./components/pages/about";
import Contact from "./components/pages/contact";
import Default from "./components/pages/Default";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route path="/service" component={Service} />
					<Route path="/contact" component={Contact} />
					<Route path="/about" component={about} />
					<Route path="*" component={Default} />
				</Switch>
				<Footer />
			</BrowserRouter>
		);
	}
}
