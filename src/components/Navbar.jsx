import React from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">Pray for Kyrgyzstan</div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="//github.io/jo_geek" target="_blank">
            push
          </a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">
            pop
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
