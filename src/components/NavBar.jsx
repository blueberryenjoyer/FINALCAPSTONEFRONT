import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="NavBar">
      <>

        <Link className="Navbar-link" to="/">
          Home
        </Link>
        <Link className="Navbar-link" to="/users">
          users
        </Link>
        <Link className="Navbar-link" to="/register">
          Register
        </Link>
        <Link className="Navbar-link" to="/login">
          Login
        </Link>
      </>

    </div>
  );
};

export default NavBar;
