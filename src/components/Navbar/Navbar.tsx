import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="navbar bg-secondary container">
      <div className="row max-width: 100%">
        <div className="col-md">
          <Link className="link" to="/">
            Home
          </Link>
        </div>

        <div className="col-md">
          <Link className="link" to="/chat">
            Chat
          </Link>
        </div>

        <div className="col-md">
          <Link className="link" to="/register">
            Register
          </Link>
        </div>

        <div className="col-md">
          <Link className="link" to="/login">
            Login
          </Link>
        </div>

        <div className="col-md">
          <Link className="link" to="/logout">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
