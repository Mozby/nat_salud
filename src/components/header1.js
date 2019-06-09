import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./img/logo.png";

import { FaAlignJustify } from "react-icons/fa";

// import "./css/header.css";
// import "./css/mininav.css";
// import "./css/hover.css";
import "./css/hamberger.css";

export default class header extends Component {
  state = {
    isOpen: false
  };
  handleToogle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navbar">
        <div className="nav-center">
          <NavLink to="/home">
            <div className="logo">
              <img width="30" src={Logo} alt="Natural Salud" />
            </div>
          </NavLink>
          <button type="button" className="nav-btn" onClick={this.handleToogle}>
            <FaAlignJustify className="nav-icon" />
          </button>
          <div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <NavLink to="/contact" className="hover">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="hover">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/home" className="hover">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
