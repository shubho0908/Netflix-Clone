import React from "react";
import Logo from "../img/logo.png";
import TV from '../img/tv.gif'
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
        <div className="mid-content">
          <p className="content-title">Unlimited movies, TV shows and more.</p>
          <p className="content-center">Watch anywhere. Cancel anytime.</p>
          <p className="membership">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="get-started">
            <input type="email" className="enter-details" placeholder="Email address"/>
            <button className="start-btn">Get Started</button>
          </div>
        </div>
        <div className="below-section1">
          <div className="section-data1">
            <div className="inside1">
            <p className="section-title">Enjoy on your TV.</p>
            <p className="section-desc">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <img src={TV} alt="" className="tv" />
          </div>
        </div>
        <div className="below-section2"></div>
        <div className="below-section3"></div>
      </div>
    </>
  );
};

export default Signup;
