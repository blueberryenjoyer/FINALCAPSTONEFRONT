import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { checkAdmin } from "./api-adapters/adapters";

const NavBar = ({ loggedin, user, admin, setAdmin }) => {




  useEffect(() => {
    const lol = async () => {
      try {
        const results = await checkAdmin(user)
        console.log('what are we getting back from checkAdmin?')
        console.log(results)
        setAdmin(results)
        console.log(admin)
      } catch (error) {
        console.log(error);
      }
    };
    lol()
  }, [user]);

  console.log('whats our admin status?')
  console.log(admin)




  return (
    <div className="NavBar">
      <>
        <Link className="Navbar-link" to="/">
          Home
        </Link>

        {admin ? (
          <>
            <Link className="Navbar-link" to="/users">
              All Users (admin)
            </Link>
          </>
        ) : (
          <>

          </>
        )}

        <Link className="Navbar-link" to="/cats">
          Cats
        </Link>

        {loggedin ? (
          <>
            <Link className="Navbar-link" to='/logout'>
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
