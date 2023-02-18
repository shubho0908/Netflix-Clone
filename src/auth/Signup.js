import React, { useState } from "react";
import Logo from "../img/logo.png";
import TV from "../img/tv.gif";
import Mobile from "../img/mobile.gif";
import device from "../img/device.gif";
import children from "../img/children.png";
import { Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = (event) => {
    if (event.target.value === "" || !event.target.value.includes("@")) {
      setEmailError("Please enter a valid email address");
      document.querySelector(".enter-details").style.borderBottom =
        "2px solid darkorange";
      document.querySelector(".enter-details").style.height = "43px";
    } else if (event.target.value.includes("@")) {
      setEmailError("");
      document.querySelector(".enter-details").style.borderBottom = "0px";
      document.querySelector(".enter-details").style.height = "43px";
    } else {
      setEmailError("");
    }
  };

  const [emailError, setEmailError] = useState("");

  const showData = () => {
    if (document.querySelector(".acc1-item").style.display === "none") {
      document.querySelector(".acc1-item").style.display = "block";
    } else {
      document.querySelector(".acc1-item").style.display = "none";
    }
  };

  const showData2 = () => {
    if (document.querySelector(".acc2-item").style.display === "none") {
      document.querySelector(".acc2-item").style.display = "block";
    } else {
      document.querySelector(".acc2-item").style.display = "none";
    }
  };

  const showData3 = () => {
    if (document.querySelector(".acc3-item").style.display === "none") {
      document.querySelector(".acc3-item").style.display = "block";
    } else {
      document.querySelector(".acc3-item").style.display = "none";
    }
  };

  return (
    <>
      <div className="App">
        <div className="bg-data">
          <div className="navbar-2">
            <div className="logo2">
              <img className="Netflix-logo2" src={Logo} alt="" />
            </div>
            <div className="signin2">
              <button className="signin-btn2">
                <Link className="signin-link2" to="/">
                  Sign In
                </Link>
              </button>
            </div>
          </div>
          <div className="mid-content">
            <p className="content-title">
              Unlimited movies, TV shows and more.
            </p>
            <p className="content-center">Watch anywhere. Cancel anytime.</p>
            <p className="membership">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="get-started">
              <div className="email-valid">
                <input
                  type="email"
                  className="enter-details"
                  placeholder="Email address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  required
                />
              </div>
              <button className="start-btn">
                <Link
                  className="start-link"
                  to={email.length === 0 || emailError.length >= 5 ? "" : "/welcome"}
                >
                  Get Started
                </Link>
              </button>
            </div>
            {emailError && <div className="error-message2">{emailError}</div>}
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
                  Save your favourites easily and always have something to
                  watch.
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
                <p
                  style={{ width: "92%", textAlign: "center" }}
                  className="section-title4"
                >
                  Create profiles for children.
                </p>
                <p className="section-desc4">
                  Send children on adventures with their favourite characters in
                  a space made just for them—free with your membership.
                </p>
              </div>
            </div>
          </div>
          <div className="below-section5">
            <div className="FAQ-section">
              <p className="FAQ">Frequently Asked Questions</p>
              <div className="accordions">
                <div onClick={showData} className="acc1">
                  <p className="acc1-data">What is Netflix?</p>
                  <p className="acc1-icon">
                    <svg
                      className="right-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </p>
                </div>
                <div style={{ display: "none" }} className="acc1-item">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  - on thousands of internet-connected devices.
                  <div className="break">
                    You can watch as much as you want, whenever you want,
                    without a single ad - all for one low monthly price. There's
                    always something new to discover, and new TV shows and
                    movies are added every week!
                  </div>
                </div>
                <div onClick={showData2} className="acc2 second">
                  <p className="acc2-data">How much does Netflix cost?</p>
                  <p className="acc2-icon">
                    <svg
                      className="right-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </p>
                </div>
                <div style={{ display: "none" }} className="acc2-item">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </div>
                <div onClick={showData3} className="acc3 second">
                  <p className="acc3-data">Is Netflix good for kids?</p>
                  <p className="acc3-icon">
                    <svg
                      className="right-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </p>
                </div>
                <div style={{ display: "none" }} className="acc3-item">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                  <div className="break">
                    Kids profiles come with PIN-protected parental controls that
                    let you restrict the maturity rating of content kids can
                    watch and block specific titles you don't want kids to see.
                  </div>
                </div>
                <div className="bottom-data">
                  <p className="membership new new-mem">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </p>
                  <div className="get-started new">
                    <input
                      type="email"
                      className="enter-details"
                      placeholder="Email address"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      required
                    />
                    <button className="start-btn new">
                      <Link
                        className="start-link"
                        to={
                          email.length === 0 || emailError.length >= 5
                            ? ""
                            : "/welcome"
                        }
                      >
                        Get Started
                      </Link>
                    </button>
                  </div>
                  {emailError && <div className="error-message2">{emailError}</div>}
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
