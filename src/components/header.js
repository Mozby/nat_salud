import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./img/logo.png";

import "./css/header.css";
import "./css/mininav.css";
import "./css/hover.css";

export default class header extends Component {
	render() {
		return (
			<div>
				<header>
					<NavLink to="/home">
						<div className="logo">
							<img width="30" src={Logo} title="Home" alt="" />
						</div>
					</NavLink>
					<nav>
						<ul>
							<li>
								<NavLink to="/home" className="hover">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/Service" className="hover">
									Service
								</NavLink>
							</li>
							<li>
								<NavLink to="/about" className="hover">
									About
								</NavLink>
							</li>
							<li>
								<NavLink to="/Contact" className="hover">
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		);
	}
}
