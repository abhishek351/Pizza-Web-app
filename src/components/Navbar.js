import React from "react";
import Logo from "../assets/logo.png";
import {Link} from "react-router-dom"
import '../styles/navbar.css'
function navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <div className="rightSide"></div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default navbar;
