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
            #KyrgyzstanUnderAttack🇰🇬
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
          <a target="_blank" onClick={() => navigate("/")}>
            Home
          </a>
          <a href="https://prayforkyrgyzstan.org/" target="_blank">
            Donate cash
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
