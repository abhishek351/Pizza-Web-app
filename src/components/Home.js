import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpg";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Yadav Pizza</h1>
        <p> Over The Taste</p>
        <Link to ='/menu'>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
