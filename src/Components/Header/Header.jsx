import React from "react";
import "./Header.css";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="DCT Academy" />
      </div>
      <nav className="nav">
        <a href="#">Free Courses</a>
        <a href="#">About</a>
        <a href="#">Full Stack Course</a>
        <a href="#">Placements</a>
        <a href="#">Contact</a>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
};

export default Header;
