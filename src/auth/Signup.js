import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  return (
    <>
      <div className="App">
        <div className="navbar-2">
          <div className="logo">
            <img className="Netflix-logo" src={Logo} alt="" />
          </div>
          <div className="signin">
            <button className="signin-btn"><Link className="signin-link" to="/">Sign In</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
