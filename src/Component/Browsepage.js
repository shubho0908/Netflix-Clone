import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase";
import Poster from "../img/movie/bg-poster.png";
import avatar from "../img/avatar.png";
import Logo from "../img/logo.png";

const auth = getAuth(app);

const Browsepage = () => {

const changeBG = ()=>{
  const navbar = document.querySelector('.navbar-4')
  const scrollVal = window.scrollY
  // console.log(scrollVal);
  if (scrollVal < 42) {
    navbar.classList.remove('nav-css')
  }
  else{
    navbar.classList.add('nav-css')

  }
}

window.addEventListener("scroll", changeBG)

  return (
    <>
      <div className="App">
        <div className="browse-page">
          <div className="navbar-4 nav-css">
            <img src={Logo} className="main-logo" />
            <div className="category-lists">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Trending</li>
              <li></li>
            </div>
            <div className="right-content">
              <div className="search-icon">
                <svg className="search-img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <div className="account">
                <img className="account-img" src={avatar} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-main-data">
            <img src={Poster} alt="" className="poster" />
            <button className="play1">&#9654; Play</button>
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
