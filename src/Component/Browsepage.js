import { React, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase";
import { AddToList } from "../action/AddList";
import Poster from "../img/movie/bg-poster.png";
import avatar from "../img/avatar.png";
import Logo from "../img/logo.png";
import Search from "../img/search.png";
import left from "../img/left.png";
import right from "../img/right.png";
import play from "../img/play.png";
import add from "../img/add.png";
import added from "../img/added.png";
import { useSelector, useDispatch } from "react-redux";

const auth = getAuth(app);

const Browsepage = () => {
  const Lists = useSelector((state) => state.AddList.Lists);
  const dispatch = useDispatch();

  const AddBtnClicked = (data) => {
    dispatch(AddToList(data));
  };

  const [movies, setMovies] = useState([]);
  const [Trending, setTrending] = useState([]);
  const [Added, setAdded] = useState(false);

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
    const TrendingMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/trending/movie/day?api_key=0bee82696d9f2ec6851e2a729cf4c379";
      const data = await fetch(url);
      const new_data = await data.json();
      setTrending(new_data.results);
      console.log(Trending);
    };

    FetchData();
    TrendingMovies();
  }, []);

  return (
    <>
      <div className="App app4">
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
            <img
              onClick={() => {
                const carousel = document.querySelector(".movie-category1");
                carousel.scrollLeft -= 1200;
              }}
              src={left}
              alt=""
              className="left-btn"
            />
          </div>
          <div className="right-scroll">
            <img
              onClick={() => {
                const carousel = document.querySelector(".movie-category1");
                carousel.scrollLeft += 1200;
              }}
              src={right}
              alt=""
              className="right-btn"
            />
          </div>
          <p className="category-title1 c-title">Now Playing</p>
          <div className="movie-category1">
            {movies.map((items) => {
              return (
                <>
                  <div className="now-playing" key={items.id}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + items.backdrop_path
                      }
                      alt=""
                      className="poster-2"
                    />
                    <div className="movie-all-data">
                      <div className="movie-title">{items.title}</div>
                      <div className="two-buttons">
                        <img src={play} alt="" className="circle-play" />
                        <img
                          onClick={() => {
                            AddBtnClicked(items);
                          }}
                          src={
                            Lists.filter((ele) => ele.id === items.id).length >
                            0
                              ? added
                              : add
                          }
                          alt=""
                          className="add-list"
                          id={`addlist${items.id}`}
                        />
                      </div>
                      <div className="extra-data">
                        <p className="match">
                          {(Math.round(items.vote_average) / 10) * 100}% match
                        </p>
                        <p className="rating">
                          {items.adult === false ? "U/A 13+" : "A"}
                        </p>
                        <p className="HD">HD</p>
                      </div>
                      <p className="movie-desc">
                        {items.overview.slice(0, 60) + "..."}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="left-scroll2">
            <img
              onClick={() => {
                const carousel = document.querySelector(".movie-category2");
                carousel.scrollLeft -= 1200;
              }}
              src={left}
              alt=""
              className="left-btn2"
            />
          </div>
          <div className="right-scroll2">
            <img
              onClick={() => {
                const carousel = document.querySelector(".movie-category2");
                carousel.scrollLeft += 1200;
              }}
              src={right}
              alt=""
              className="right-btn2"
            />
          </div>
          <p className="category-title2 c-title">Popular</p>
          <div className="movie-category2">
            {Trending.map((items) => {
              return (
                <div className="trending-movies">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500" + items.backdrop_path
                    }
                    alt=""
                    className="poster-3"
                  />
                  <div className="movie-all-data">
                    <div className="movie-title">{items.title}</div>
                    <div className="two-buttons">
                      <button className="circle-play"></button>
                      <button className="add-list"></button>
                    </div>
                    <div className="extra-data">
                      <p className="match">
                        {(Math.round(items.vote_average) / 10) * 100}% match
                      </p>
                      <p className="rating">
                        {items.adult === false ? "U/A 16+" : "A"}
                      </p>
                      <p className="HD">HD</p>
                    </div>
                    <p className="movie-desc">
                      {items.overview.slice(0, 60) + "..."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-category3"></div>
          <div className="movie-category4"></div>
        </div>
      </div>
    </>
  );
};

export default Browsepage;
