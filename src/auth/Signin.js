import { React, useState } from "react";
import "./Auth.css";
// IMG Files
import Logo from "../img/logo.png";

const Signin = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = (event) => {
    if (event.target.value === "") {
      setEmailError("Please enter a valid email address or phone number.");
      document.querySelector(".email-inp").style.borderBottom =
        "2px solid darkorange";
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = (event) => {
    if (event.target.value === "") {
      setPasswordError(
        "Your password must contain between 4 and 60 characters."
      );
      document.querySelector(".password-inp").style.borderBottom =
        "2px solid darkorange";
    } else {
      setPasswordError("");
    }
  };

  const [emailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

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
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  required
                />
                {emailError && (
                  <div className="error-message">{emailError}</div>
                )}
              </div>
              <div className="password">
                <input
                  className="password-inp"
                  type="password"
                  placeholder="Password"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                  title="Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number"
                  onBlur={handlePasswordBlur}
                  required
                />
                {PasswordError && (
                  <div className="error-message">{PasswordError}</div>
                )}
              </div>
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
            <div className="help-section">
              <div className="remember">
                <input className="check" type="checkbox" />
                Remember me
              </div>
              <div className="need-help">Need help?</div>
            </div>
            <div className="new-to-netflix">
              <p>New to Netflix?</p>
              <a href="" style={{ textDecoration: "none" }}>
                <p className="signup-now">Sign up now.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
