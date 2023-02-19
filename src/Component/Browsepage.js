import { React, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase";
import Poster from "../img/movie/bg-poster.png";
import avatar from "../img/avatar.png";
import Logo from "../img/logo.png";
import Search from '../img/search.png'
import left from '../img/left.png'
import right from '../img/right.png'

const auth = getAuth(app);

const Browsepage = () => {
  const [movies, setMovies] = useState([]);

  const changeBG = () => {
    const navbar = document.querySelector(".navbar-4");
    const scrollVal = window.scrollY;
    // console.log(scrollVal);
    if (scrollVal < 42) {
      navbar.classList.remove("nav-css");
    } else {
      navbar.classList.add("nav-css");
    }
  };

  window.addEventListener("scroll", changeBG);

  useEffect(() => {
    const FetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=0bee82696d9f2ec6851e2a729cf4c379&language=en-US&page=1";
      const data = await fetch(url);
      const new_data = await data.json();
      setMovies(new_data.results);
      console.log(movies);
    };

    FetchData();
  }, []);

  return (
    <>
      <div className="App">
        <div className="navbar-4 nav-css">
          <img src={Logo} className="main-logo" />
          <div className="category-lists">
            <li style={{ fontWeight: 600 }}>Home</li>
            <li style={{ width: "4.5vw" }}>TV Shows</li>
            <li style={{ width: "3vw" }}>My List</li>
            <li>Popular</li>
            <li></li>
          </div>
          <div className="right-content">
            <div className="search-icon">
              <img src={Search} alt="" className="search-white" />
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
            <div className="left-scroll">
              <img onClick={()=>{
                const carousel = document.querySelector('.movie-category1')
                carousel.scrollLeft -= 1200

              }} src={left} alt="" className="left-btn" />
            </div>
            <div  className="right-scroll">
            <img onClick={()=>{
                const carousel = document.querySelector('.movie-category1')
                carousel.scrollLeft += 1200

              }} src={right} alt="" className="right-btn" />
            </div>
          <div className="movie-category1">
            {movies.map((items) => {
              return (
                <>
                  <div className="newboy">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + items.backdrop_path
                      }
                      alt=""
                      className="poster-2"
                    />
                  </div>
                </>
              );
            })}
            
          </div>
          <div className="movie-category2"></div>
          <div className="movie-category3"></div>
          <div className="movie-category4"></div>
        </div>
      </div>
    </>
  );
};

export default Browsepage;
