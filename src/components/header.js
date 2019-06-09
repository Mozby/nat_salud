import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./img/logo.png";

import { FaAlignJustify } from "react-icons/fa";

import "./css/header.css";
import "./css/mininav.css";
import "./css/hover.css";

export default class header extends Component {

  state = {
    isOpen: false
  };
  handleToogle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <header>
          <NavLink to="/home">
            <div className="logo">
              <img width="30" src={Logo} title="Home" alt="" />
              Natural Salud 
            </div>
          </NavLink>
          <button type="button" className="toggle" onClick={this.handleToogle}>
            <FaAlignJustify className="nav-icon" />
          </button>
          <nav>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
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

