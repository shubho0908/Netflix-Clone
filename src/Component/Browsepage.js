import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase";
import Poster from "../img/movie/bg-poster.png";
import Logo from '../img/logo.png'

const auth = getAuth(app);

const Browsepage = () => {
  return (
    <>
      <div className="App">
        <div className="browse-page">
          <div className="navbar-4">
            <img src={Logo} className="main-logo" />
          </div>
          <div className="bg-main-data">
            <img src={Poster} alt="" className="poster" />
            <button className="play1">
              
            &#9654;
              Play
            </button>
          </div>
          <div className="movies-section">
            <div className="movie-category1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browsepage;
