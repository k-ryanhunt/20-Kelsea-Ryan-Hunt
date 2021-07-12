import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import "../../style.css";

const mainPage = () => {
  return (
    <header>
      <h1>Kelsea Ryan Hunt</h1>
      <h2>UX/UI Web Designer</h2>
      <nav className="navbar">
        <div className="col-md-1"></div>
        <div className="col-md-1">
          <Link to="/About">HOME</Link>
        </div>
        <div className="col-md-1">
          <Link to="/Portfolio">PORTFOLIO</Link>
        </div>
        <div className="col-md-1">
          <Link to="/Contact">CONTACT</Link>
        </div>
        <div className="col-md-1"></div>
      </nav>
    </header>
  );
};
export default mainPage;
