import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <header className="appHeader">
      <div className="appHeader__logo">
        <h1>BlogApp</h1>
      </div>
      <nav className="appHeader__nav">
        <li>
          <a href="#">Home</a>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
