import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/images/LOGO.png";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={LOGO} alt="Logo kasa" className="logos" />
      </NavLink>
    </div>
  );
};

export default Logo;
