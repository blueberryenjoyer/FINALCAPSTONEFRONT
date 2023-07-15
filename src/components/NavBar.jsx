import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ loggedin, setLoggedin }) => {

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
        <Link className="Navbar-link" to="/cat/1">
          Cat
        </Link>
        <Link className="Navbar-link" to="/reviews">
          Reviews
        </Link>

        {loggedin ? (
          <>
            <Link className="Navbar-link" to="/logout">
              Logout
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
