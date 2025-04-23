import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
