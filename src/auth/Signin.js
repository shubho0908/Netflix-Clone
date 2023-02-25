import { React, useState } from "react";
import "./Auth.css";
import "../App.css";
// IMG Files
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import swal from "sweetalert";

const auth = getAuth(app);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LogIn = () => {
    if (email === "" || password === "") {
      swal({
        title: "Error!",
        text: "Fill up the credentials to move forward.",
        icon: "warning",
        button: "Ok!",
      });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {})
        .catch(() => {
          swal({
            title: "Error!",
            text: "Wrong password or user doesn't exists.",
            icon: "warning",
            button: "Ok!",
          });
        });
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailBlur = (event) => {
    if (event.target.value === "") {
      setEmailError("Please enter a valid email address.");
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
      <div className="App">
        <div className="navbar">
          <div className="logo">
            <img className="Netflix-logo" src={Logo} alt="" />
          </div>
        </div>
        <div className="main-page">
          <div className="container1">
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
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    required
                  />
                  {PasswordError && (
                    <div className="error-message">{PasswordError}</div>
                  )}
                </div>
              </div>
              <button onClick={LogIn} type="submit" className="signin-button">
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
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <p className="signup-now">Sign up now.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
