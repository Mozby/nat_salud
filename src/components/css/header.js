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
      <div className="header">
        <div className="nav-center">
          {/* <NavLink to="/home">
            <div className="logo">
              <img width="30" src={Logo} alt="Natural Salud" />
            </div>
          </NavLink> */}
          <button type="button" className="nav-btn" onClick={this.handleToogle}>
            <FaAlignJustify className="nav-icon" />
          </button>
          <div className={this.state.isOpen ? "show-nav " : "nav-links"}>
            <ul>
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
