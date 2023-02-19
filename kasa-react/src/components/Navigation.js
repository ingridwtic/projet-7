import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={(nav) =>
          nav.isActive ? "nav__link nav__link--active" : "nav__link"
        }
        end
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={(nav) =>
          nav.isActive ? "nav__link nav__link--active" : "nav__link"
        }
      >
        A Propos
      </NavLink>
    </nav>
  );
};

export default Navigation;
