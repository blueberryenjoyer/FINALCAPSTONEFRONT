import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ loggedin, user }) => {

  return (
    <div className="NavBar">
      <>
        <Link className="Navbar-link" to="/">
          Home
        </Link>
        <Link className="Navbar-link" to="/users">
          Users
        </Link>
        <Link className="Navbar-link" to="/cats">
          Cats
        </Link>

        {loggedin ? (
          <>
            <Link className="Navbar-link" to="/logout">
              Profile({user})
            </Link>
          </>
        ) : (
          <>
            <Link className="Navbar-link" to="/register">
              Register
            </Link>
            <Link className="Navbar-link" to="/login">
              Login
            </Link>
          </>
        )}
      </>
    </div>
  );
};

export default NavBar;
