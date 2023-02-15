import React from "react";
import "./Auth.css";
// IMG Files
import Logo from "../img/logo.png";

const Signin = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img className="Netflix-logo" src={Logo} alt="" />
        </div>
      </div>
      <div className="main-page">
        <div className="container">
          <div className="signin-page">
            <h2 className="signin-head">Sign In</h2>
            <div className="input-fields">
              <div className="email">
                <input
                  className="email-inp"
                  type="text"
                  placeholder="Email or phone number"
                />
              </div>
              <div className="password">
                <input
                  className="password-inp"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <button className="signin-button">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
