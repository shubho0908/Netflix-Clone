import React, { useState } from "react";
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
              <p className="section-title4">Create profiles for children.</p>
              <p className="section-desc4">
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
        <div className="below-section5">
          <div className="FAQ-section">
            <p className="FAQ">Frequently Asked Questions</p>
            <div className="accordions">
              <div className="acc1">
                <p className="acc1-data">What is Netflix?</p>
                <p className="acc1-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </p>
              </div>
              <div className="acc1-item">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more -
                on thousands of internet-connected devices.
                <div className="break">
                  You can watch as much as you want, whenever you want, without
                  a single ad - all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
