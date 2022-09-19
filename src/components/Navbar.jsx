import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div onClick={() => navigate("/")} className="nav-title">
            Donate
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="#" target="_blank" onClick={() => navigate("")}>
            crypto
          </a>
          <a href="#" target="_blank">
            visa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
