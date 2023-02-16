import React from "react";
import Logo from "../img/logo.png";
import TV from "../img/tv.gif";
import Mobile from "../img/mobile.gif";
import device from "../img/device.gif";
import children from "../img/children.png";
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
            <button className="signin-btn">
              <Link className="signin-link" to="/">
                Sign In
              </Link>
            </button>
          </div>
        </div>
        <div className="mid-content">
          <p className="content-title">Unlimited movies, TV shows and more.</p>
          <p className="content-center">Watch anywhere. Cancel anytime.</p>
          <p className="membership">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="get-started">
            <input
              type="email"
              className="enter-details"
              placeholder="Email address"
            />
            <button className="start-btn">Get Started</button>
          </div>
        </div>
        <div className="below-section1">
          <div className="section-data1">
            <div className="inside1">
              <p className="section-title">Enjoy on your TV.</p>
              <p className="section-desc">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <img src={TV} alt="" className="tv" />
          </div>
        </div>
        <div className="below-section2">
          <div className="section-data2">
            <img src={Mobile} alt="" className="mobile" />
            <div className="inside2">
              <p className="section-title2">
                Download your shows to watch offline.
              </p>
              <p className="section-desc2">
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
        <div className="below-section3">
          <div className="section-data3">
            <div className="inside3">
              <p className="section-title3">Watch everywhere.</p>
              <p className="section-desc3">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <img src={device} alt="" className="device" />
          </div>
        </div>
        <div className="below-section4">
        <div className="section-data4">
            <img src={children} alt="" className="children" />
            <div className="inside4">
              <p className="section-title4">
              Create profiles for children.
              </p>
              <p className="section-desc4">
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
