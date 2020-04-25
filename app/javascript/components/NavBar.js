import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        Moppy
      </Link>
      <div className="navbar__actions">
        <Link to="/" className="navbar__action">
          All streams
        </Link>
        <Link to="/" className="navbar__action">
          Log In
        </Link>
        <Link to="/" className="navbar__action">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
