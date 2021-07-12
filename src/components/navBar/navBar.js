import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import "../../style.css";

const mainPage = () => {
  return (
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
  );
};
export default mainPage;
