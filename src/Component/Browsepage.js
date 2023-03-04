import { React, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddToList, RemoveList } from "../action/add";
import Poster2 from "../img/movie/bg-2.gif";
import avatar from "../img/avatar.png";
import Logo from "../img/logo.png";
import Search from "../img/search.png";
import left from "../img/left.png";
import right from "../img/right.png";
import play from "../img/play.png";
import add from "../img/add.png";
import added from "../img/added.png";
import movieposter2 from "../img/movie/bg-3.gif";

const auth = getAuth(app);

const Browsepage = (props) => {
  const ListItems = useSelector((state) => state.MoviesAdded.ListItems);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [Trending, setTrending] = useState([]);
  const [Rated, setRated] = useState([]);
  const [Added, setAdded] = useState(false);
  const [Anime1, setAnime1] = useState([]);
  const [TV, setTV] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [Recommendation, setRecommendation] = useState([]);
  const [TrendingTV, setTrendingTV] = useState([]);
  const [Fiction, setFiction] = useState([]);
  const [isClicked, setClicked] = useState(false);
  const [AddedIds, setAddedIds] = useState([]);
  const [isHome, setHome] = useState(true);
  const [isList, setList] = useState(false);
  const [isMovies, setisMovies] = useState(false);

  const changeBG = () => {
    const ScrollVal = window.scrollY;
    if (ScrollVal > 52) {
      document.querySelector(".navbar-4").classList.add("nav-css");
    } else {
      document.querySelector(".navbar-4").classList.remove("nav-css");
    }
  };

  window.addEventListener("scroll", changeBG);

  const SearchChange = () => {
      document.querySelector(".search-white").style.opacity = "0";
      document.querySelector(".search-bar").style.opacity = "1";
  };

  const OnSearch = async (e) => {
    const searchValue = e.target.value;
    document.querySelector(".poster").style.display = "none";
    document.querySelector(".my-list").style.display = "none";
    document.querySelector(".search-data").style.display = "grid";
    document.querySelector(".movies-category-01").style.display = "none";
    document.querySelector(".movies-category-02").style.display = "none";
    document.querySelector(".movies-category-03").style.display = "none";
    document.querySelector(".movies-category-04").style.display = "none";
    document.querySelector(".new-title01").style.display = "none";
    document.querySelector(".new-title02").style.display = "none";
    document.querySelector(".new-title03").style.display = "none";
    document.querySelector(".new-title04").style.display = "none";
    document.querySelector(".new-leftbtn-01").style.display = "none";
    document.querySelector(".new-leftbtn-02").style.display = "none";
    document.querySelector(".new-leftbtn-03").style.display = "none";
    document.querySelector(".new-leftbtn-04").style.display = "none";
    document.querySelector(".new-rightbtn-01").style.display = "none";
    document.querySelector(".new-rightbtn-02").style.display = "none";
    document.querySelector(".new-rightbtn-03").style.display = "none";
    document.querySelector(".new-rightbtn-04").style.display = "none";
    document.querySelector(".list-name").style.display = "none";
    document.querySelector(".list-name").style.display = "none";

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        const searchdata = data.results;
        const dataLength = searchdata.length;

        if (dataLength > 10) {
          document.querySelector(".movies-section").style.height = "100%";
          document.querySelector(".all-dataa").style.height = "100%";
        } else {
          document.querySelector(".movies-section").style.height = "100vh";
          document.querySelector(".all-dataa").style.height = "100vh";
        }
      })
      .catch((error) => console.error(error));

    document.querySelector(".movie-category1").style.display = "none";
    document.querySelector(".movie-category2").style.display = "none";
    document.querySelector(".movie-category3").style.display = "none";
    document.querySelector(".movie-category4").style.display = "none";
    document.querySelector(".movie-category5").style.display = "none";
    document.querySelector(".left-scroll").style.display = "none";
    document.querySelector(".right-scroll").style.display = "none";
    document.querySelector(".left-scroll2").style.display = "none";
    document.querySelector(".right-scroll2").style.display = "none";
    document.querySelector(".left-scroll3").style.display = "none";
    document.querySelector(".right-scroll3").style.display = "none";
    document.querySelector(".left-scroll4").style.display = "none";
    document.querySelector(".right-scroll4").style.display = "none";
    document.querySelector(".left-scroll5").style.display = "none";
    document.querySelector(".right-scroll5").style.display = "none";

    document.body.style.background = "#141414";
    setSearch(searchValue);
    if (searchValue.trim() === "") {
      setSearchData([]);
      document.querySelector(".search-data").style.display = "none";
      document.querySelector(".poster").style.display = "block";
      document.querySelector(".movies-section").style.height = "100vh";
      document.querySelector(".all-dataa").style.height = "100vh";
      if (isHome === true) {
        Home();
      } else if (isList === true) {
        MyList();
      } else if (isMovies === true) {
        MoviesTab();
      }
    } else {
      const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchData(data.results);
    }
  };

  const MyList = () => {
    setList(true);
    setHome(false);
    setisMovies(false);
    document.querySelector(".list-name").style.display = "block";
    document.querySelector(".my-list").style.display = "grid";
    if (ListItems.length > 10) {
      document.querySelector(".movies-section").style.height = "100%";
      document.querySelector(".all-dataa").style.height = "100%";
    } else {
      document.querySelector(".movies-section").style.height = "100vh";
      document.querySelector(".all-dataa").style.height = "100vh";
    }
    document.querySelector(".list").style.color = "white";
    document.querySelector(".list").style.fontWeight = "600";
    document.querySelector(".home").style.color = "rgba(255, 255, 255, 0.742)";
    document.querySelector(".home").style.fontWeight = "400";
    document.querySelector(".movies").style.color =
      "rgba(255, 255, 255, 0.742)";
    document.querySelector(".movies").style.fontWeight = "400";

    document.querySelector(".search-data").style.display = "none";
    document.querySelector(".search-data").style.bottom = "-5.2vw";
    document.querySelector(".poster").style.display = "none";
    document.querySelector(".new-title01").style.display = "none";
    document.querySelector(".new-title02").style.display = "none";
    document.querySelector(".new-title03").style.display = "none";
    document.querySelector(".new-title04").style.display = "none";
    document.querySelector(".category-title1").style.display = "none";
    document.querySelector(".category-title2").style.display = "none";
    document.querySelector(".category-title3").style.display = "none";
    document.querySelector(".category-title4").style.display = "none";
    document.querySelector(".category-title5").style.display = "none";
    document.querySelector(".movie-category1").style.display = "none";
    document.querySelector(".movie-category2").style.display = "none";
    document.querySelector(".movie-category3").style.display = "none";
    document.querySelector(".movie-category4").style.display = "none";
    document.querySelector(".movie-category5").style.display = "none";
    document.querySelector(".movies-category-01").style.display = "none";
    document.querySelector(".movies-category-02").style.display = "none";
    document.querySelector(".movies-category-03").style.display = "none";
    document.querySelector(".movies-category-04").style.display = "none";
    document.querySelector(".new-leftbtn-01").style.display = "none";
    document.querySelector(".new-leftbtn-02").style.display = "none";
    document.querySelector(".new-leftbtn-03").style.display = "none";
    document.querySelector(".new-leftbtn-04").style.display = "none";
    document.querySelector(".new-rightbtn-01").style.display = "none";
    document.querySelector(".new-rightbtn-02").style.display = "none";
    document.querySelector(".new-rightbtn-03").style.display = "none";
    document.querySelector(".new-rightbtn-04").style.display = "none";
    document.querySelector(".left-scroll").style.display = "none";
    document.querySelector(".right-scroll").style.display = "none";
    document.querySelector(".left-scroll2").style.display = "none";
    document.querySelector(".right-scroll2").style.display = "none";
    document.querySelector(".left-scroll3").style.display = "none";
    document.querySelector(".right-scroll3").style.display = "none";
    document.querySelector(".left-scroll4").style.display = "none";
    document.querySelector(".right-scroll4").style.display = "none";
    document.querySelector(".left-scroll5").style.display = "none";
    document.querySelector(".right-scroll5").style.display = "none";
  };

  const MoviesTab = () => {
    setisMovies(true);
    setHome(false);
    setList(false);
    document.querySelector(".poster").src = movieposter2;
    document.querySelector(".movies-section").style.height = "100vh";
    document.querySelector(".all-dataa").style.height = "100vh";
    document.querySelector(".movies").style.color = "white";
    document.querySelector(".movies").style.fontWeight = "600";
    document.querySelector(".home").style.color = "rgba(255, 255, 255, 0.742)";
    document.querySelector(".home").style.fontWeight = "400";
    document.querySelector(".list").style.color = "rgba(255, 255, 255, 0.742)";
    document.querySelector(".list").style.fontWeight = "400";

    document.querySelector(".poster").style.display = "block";
    document.querySelector(".search-data").style.display = "none";
    document.querySelector(".search-data").style.bottom = "-5.2vw";
    document.querySelector(".my-list").style.display = "none";
    document.querySelector(".list-name").style.display = "none";
    document.querySelector(".category-title1").style.display = "none";
    document.querySelector(".category-title2").style.display = "none";
    document.querySelector(".category-title3").style.display = "none";
    document.querySelector(".category-title4").style.display = "none";
    document.querySelector(".category-title5").style.display = "none";
    document.querySelector(".new-title01").style.display = "block";
    document.querySelector(".new-title02").style.display = "block";
    document.querySelector(".new-title03").style.display = "block";
    document.querySelector(".new-title04").style.display = "block";
    document.querySelector(".movie-category1").style.display = "none";
    document.querySelector(".movie-category2").style.display = "none";
    document.querySelector(".movie-category3").style.display = "none";
    document.querySelector(".movie-category4").style.display = "none";
    document.querySelector(".movie-category5").style.display = "none";
    document.querySelector(".movies-category-01").style.display = "flex";
    document.querySelector(".movies-category-02").style.display = "flex";
    document.querySelector(".movies-category-03").style.display = "flex";
    document.querySelector(".movies-category-04").style.display = "flex";
    document.querySelector(".new-leftbtn-01").style.display = "block";
    document.querySelector(".new-rightbtn-01").style.display = "block";
    document.querySelector(".new-leftbtn-02").style.display = "block";
    document.querySelector(".new-leftbtn-03").style.display = "block";
    document.querySelector(".new-leftbtn-04").style.display = "block";
    document.querySelector(".new-rightbtn-02").style.display = "block";
    document.querySelector(".new-rightbtn-03").style.display = "block";
    document.querySelector(".new-rightbtn-04").style.display = "block";
    document.querySelector(".left-scroll").style.display = "none";
    document.querySelector(".right-scroll").style.display = "none";
    document.querySelector(".left-scroll2").style.display = "none";
    document.querySelector(".right-scroll2").style.display = "none";
    document.querySelector(".left-scroll3").style.display = "none";
    document.querySelector(".right-scroll3").style.display = "none";
    document.querySelector(".left-scroll4").style.display = "none";
    document.querySelector(".right-scroll4").style.display = "none";
    document.querySelector(".left-scroll5").style.display = "none";
    document.querySelector(".right-scroll5").style.display = "none";
    document.querySelector(".search-data").style.display = "none";
    document.querySelectorAll(".c-title").style.display = "none";
  };
  const Home = () => {
    setHome(true);
    setList(false);
    setisMovies(false);
    document.querySelector(".poster").src = Poster2;
    document.querySelector(".movies-section").style.height = "100vh";
    document.querySelector(".all-dataa").style.height = "100vh";
    document.querySelector(".home").style.color = "white";
    document.querySelector(".home").style.fontWeight = "600";
    document.querySelector(".list").style.color = "rgba(255, 255, 255, 0.742)";
    document.querySelector(".list").style.fontWeight = "400";
    document.querySelector(".movies").style.color =
      "rgba(255, 255, 255, 0.742)";
    document.querySelector(".movies").style.fontWeight = "400";

    document.querySelector(".poster").style.display = "block";
    document.querySelector(".search-data").style.display = "none";
    document.querySelector(".search-data").style.bottom = "11vw";
    document.querySelector(".my-list").style.display = "none";
    document.querySelector(".list-name").style.display = "none";
    document.querySelector(".new-title01").style.display = "none";
    document.querySelector(".new-title02").style.display = "none";
    document.querySelector(".new-title03").style.display = "none";
    document.querySelector(".new-title04").style.display = "none";
    document.querySelector(".category-title1").style.display = "block";
    document.querySelector(".category-title2").style.display = "block";
    document.querySelector(".category-title3").style.display = "block";
    document.querySelector(".category-title4").style.display = "block";
    document.querySelector(".category-title5").style.display = "block";
    document.querySelector(".movie-category1").style.display = "flex";
    document.querySelector(".movie-category2").style.display = "flex";
    document.querySelector(".movie-category3").style.display = "flex";
    document.querySelector(".movie-category4").style.display = "flex";
    document.querySelector(".movie-category5").style.display = "flex";
    document.querySelector(".movies-category-01").style.display = "none";
    document.querySelector(".movies-category-02").style.display = "none";
    document.querySelector(".movies-category-03").style.display = "none";
    document.querySelector(".movies-category-04").style.display = "none";

    document.querySelector(".left-scroll").style.display = "block";
    document.querySelector(".right-scroll").style.display = "block";
    document.querySelector(".left-scroll2").style.display = "block";
    document.querySelector(".right-scroll2").style.display = "block";
    document.querySelector(".left-scroll3").style.display = "block";
    document.querySelector(".right-scroll3").style.display = "block";
    document.querySelector(".left-scroll4").style.display = "block";
    document.querySelector(".right-scroll4").style.display = "block";
    document.querySelector(".left-scroll5").style.display = "block";
    document.querySelector(".right-scroll5").style.display = "block";
    document.querySelector(".new-leftbtn-01").style.display = "none";
    document.querySelector(".new-rightbtn-01").style.display = "none";
    document.querySelector(".new-leftbtn-02").style.display = "none";
    document.querySelector(".new-leftbtn-03").style.display = "none";
    document.querySelector(".new-leftbtn-04").style.display = "none";
    document.querySelector(".new-rightbtn-02").style.display = "none";
    document.querySelector(".new-rightbtn-03").style.display = "none";
    document.querySelector(".new-rightbtn-04").style.display = "none";
  };

  useEffect(() => {
    const FetchData = async () => {
      const url =
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
      const data = await fetch(url);
      const new_data = await data.json();
      setMovies(new_data.results);
    };
    const TrendingMovies = async () => {
      let pageno = Math.floor(Math.random() * 100) + 1;
      const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${pageno}`;
      const data = await fetch(url);
      const new_data = await data.json();
      setTrending(new_data.results);
    };
    const TopRated = async () => {
      let pageno = Math.floor(Math.random() * 450) + 1;
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageno}`;
      const data = await fetch(url);
      const new_data = await data.json();
      setRated(new_data.results);
    };
    const ClassicAnime = async () => {
      let pageno = Math.floor(Math.random() * 2) + 1;
      const url = `https://api.themoviedb.org/3/movie/129/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageno}`;
      const data = await fetch(url);
      const new_data = await data.json();
      setAnime1(new_data.results);
    };
    const TVshows = async () => {
      let pageno = Math.floor(Math.random() * 40) + 1;
      const url = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageno}`;
      const data = await fetch(url);
      const new_data = await data.json();
      setTV(new_data.results);
    };

    const FetchMovies2 = async () => {
      let pageno = Math.floor(Math.random() * 45) + 1;

      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageno}&region=in`;
      const data = await fetch(url);
      const new_data = await data.json();
      setMovies2(new_data.results);
    };

    const FetchMovies3 = async () => {
      let pageno = Math.floor(Math.random() * 2) + 1;

      const url = `https://api.themoviedb.org/3/movie/19995/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageno}`;
      const data = await fetch(url);
      const new_data = await data.json();
      setRecommendation(new_data.results);
    };

    const FetchTV = async () => {
      let pageno = Math.floor(Math.random() * 50) + 1;

      const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&page=${pageno}`;
      const data = await fetch(url);
      const new_data = await data.json();
      setTrendingTV(new_data.results);
    };

    const Fictional = async () => {
      let pageno = Math.floor(Math.random() * 100) + 1;

      const url = `https://api.themoviedb.org/3/movie/616037/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageno}`;
      const data = await fetch(url);
      const new_data = await data.json();
      setFiction(new_data.results);
    };

    FetchData();
    TrendingMovies();
    TopRated();
    ClassicAnime();
    TVshows();
    FetchMovies2();
    FetchMovies3();
    FetchTV();
    Fictional();
  }, []);

  useEffect(() => {
    // Update the added ids whenever the list items change
    const ids = ListItems.map((item) => item.id);
    setAddedIds(ids);
  }, [ListItems]);

  const isAdded = (itemId) => {
    // Check if the item id is in the added ids
    return AddedIds.includes(itemId);
  };

  return (
    <>
      <div className="App app4">
        <div className="navbar-4 nav-css">
          <a className="logo-anchor" href="/">
            <img src={Logo} className="main-logo" />
          </a>
          <div className="category-lists">
            <li
              className="home"
              onClick={Home}
              style={{ fontWeight: 600, width: "4.5vw" }}
            >
              Home
            </li>
            <li className="list" onClick={MyList} style={{ width: "4.5vw" }}>
              My List
            </li>
            <li
              onClick={MoviesTab}
              className="movies"
              style={{ width: "7.5vw" }}
            >
              Movies & TV Shows
            </li>
          </div>
          <div className="right-content">
            <div onClick={SearchChange} className="search-icon">
              <img src={Search} className="search-white" />
              <input
                onChange={OnSearch}
                type="text"
                value={search}
                className="search-bar"
                placeholder="Search Movies, TV Shows.."
              />
            </div>
            <div className="account">
              <img
                onClick={() => {
                  setClicked(!isClicked);
                  if (!isClicked) {
                    document.querySelector(".user-data").style.display =
                      "block";
                  } else {
                    document.querySelector(".user-data").style.display = "none";
                  }
                }}
                className="account-img"
                src={avatar}
              />
            </div>
            <div className="user-data">
              <p className="user-name">{props.username.slice(0, 5) + ".."}</p>
              <hr />
              <p
                className="signout"
                onClick={() => {
                  signOut(auth);
                  navigate("/")
                }}
              >
                Sign out
              </p>
            </div>
          </div>
        </div>
        <div className="bg-main-data">
          <img src={Poster2} className="poster" />
          <button className="play1">&#9654; Play</button>
        </div>
        <div className="movies-section">
          <div className="all-dataa">
            <div className="left-scroll">
              <img
                onClick={() => {
                  const carousel = document.querySelector(".movie-category1");
                  carousel.scrollLeft -= 1200;
                }}
                src={left}
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
                          items.backdrop_path === null || !items.backdrop_path
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        className="poster-2"
                      />
                      <div className="movie-all-data">
                        <div className="movie-title">
                          {items.title || items.name}
                        </div>
                        <div className="two-buttons">
                          <img src={play} className="circle-play" />
                          <img
                            onClick={() => {
                              if (!isAdded(items.id)) {
                                dispatch(AddToList(items));
                              } else {
                                dispatch(RemoveList(items.id));
                              }
                            }}
                            src={
                              isAdded(items.id) ? added : add
                            }
                            className="add-list"
                          />
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
                          {items.overview && items.overview.slice(0, 80) + "..."}
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
                        items.backdrop_path === null || !items.backdrop_path
                          ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                          : "https://image.tmdb.org/t/p/w500" +
                            items.backdrop_path
                      }
                      className="poster-3"
                    />
                    <div className="movie-all-data">
                      <div className="movie-title">
                        {items.title || items.name}
                      </div>
                      <div className="two-buttons">
                        <img src={play} className="circle-play" />
                        <img
                          onClick={() => {
                            if (!isAdded(items.id)) {
                              dispatch(AddToList(items));
                            } else {
                              dispatch(RemoveList(items.id));
                            }
                          }}
                          src={
                            isAdded(items.id) ? added : add
                          }
                          className="add-list"
                        />
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
                        {items.overview && items.overview.slice(0, 80) + "..."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="left-scroll3">
              <img
                onClick={() => {
                  const carousel = document.querySelector(".movie-category3");
                  carousel.scrollLeft -= 1200;
                }}
                src={left}
                className="left-btn3"
              />
            </div>
            <div className="right-scroll3">
              <img
                onClick={() => {
                  const carousel = document.querySelector(".movie-category3");
                  carousel.scrollLeft += 1200;
                }}
                src={right}
                className="right-btn3"
              />
            </div>
            <p className="category-title3 c-title">Top Rated Movies</p>
            <div className="movie-category3">
              {Rated.map((items) => {
                return (
                  <div className="top-movies">
                    <img
                      src={
                        items.backdrop_path === null || !items.backdrop_path
                          ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                          : "https://image.tmdb.org/t/p/w500" +
                            items.backdrop_path
                      }
                      className="poster-4"
                    />
                    <div className="movie-all-data">
                      <div className="movie-title">
                        {items.title || items.name}
                      </div>
                      <div className="two-buttons">
                        <img src={play} className="circle-play" />
                        <img
                          onClick={() => {
                            if (!isAdded(items.id)) {
                              dispatch(AddToList(items));
                            } else {
                              dispatch(RemoveList(items.id));
                            }
                          }}
                          src={
                            isAdded(items.id) ? added : add
                          }
                          className="add-list"
                        />
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
                        {items.overview && items.overview.slice(0, 80) + "..."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="left-scroll4">
              <img
                onClick={() => {
                  const carousel = document.querySelector(".movie-category4");
                  carousel.scrollLeft -= 1200;
                }}
                src={left}
                className="left-btn4"
              />
            </div>
            <div className="right-scroll4">
              <img
                onClick={() => {
                  const carousel = document.querySelector(".movie-category4");
                  carousel.scrollLeft += 1200;
                }}
                src={right}
                className="right-btn4"
              />
            </div>
            <p className="category-title4 c-title">Some Masterpieces</p>
            <div className="movie-category4">
              {Anime1.map((items) => {
                return (
                  <div className="anime1-movies">
                    <img
                      src={
                        items.backdrop_path === null || !items.backdrop_path
                          ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                          : "https://image.tmdb.org/t/p/w500" +
                            items.backdrop_path
                      }
                      className="poster-5"
                    />
                    <div className="movie-all-data">
                      <div className="movie-title">
                        {items.title || items.name}
                      </div>
                      <div className="two-buttons">
                        <img src={play} className="circle-play" />
                        <img
                          onClick={() => {
                            if (!isAdded(items.id)) {
                              dispatch(AddToList(items));
                            } else {
                              dispatch(RemoveList(items.id));
                            }
                          }}
                          src={
                            isAdded(items.id) ? added : add
                          }
                          className="add-list"
                        />
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
                        {items.overview && items.overview.slice(0, 80) + "..."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="left-scroll5">
              <img
                onClick={() => {
                  const carousel = document.querySelector(".movie-category5");
                  carousel.scrollLeft -= 1200;
                }}
                src={left}
                className="left-btn5"
              />
            </div>
            <div className="right-scroll5">
              <img
                onClick={() => {
                  const carousel = document.querySelector(".movie-category5");
                  carousel.scrollLeft += 1200;
                }}
                src={right}
                className="right-btn5"
              />
            </div>
            <p className="category-title5 c-title">
              Trending Shows in India Today
            </p>
            <div className="movie-category5">
              {TV.map((items) => {
                return (
                  <div className="top-india-movies">
                    <img
                      src={
                        items.backdrop_path === null || !items.backdrop_path
                          ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                          : "https://image.tmdb.org/t/p/w500" +
                            items.backdrop_path
                      }
                      className="poster-6"
                    />
                    <div className="movie-all-data">
                      <div className="movie-title">
                        {items.title || items.name}
                      </div>
                      <div className="two-buttons">
                        <img src={play} className="circle-play" />
                        <img
                          onClick={() => {
                            if (!isAdded(items.id)) {
                              dispatch(AddToList(items));
                            } else {
                              dispatch(RemoveList(items.id));
                            }
                          }}
                          src={
                            isAdded(items.id) ? added : add
                          }
                          className="add-list"
                        />
                      </div>
                      <div className="extra-data">
                        <p className="match">
                          {(Math.round(items.vote_average) / 10) * 100}% match
                        </p>
                        <p className="rating">U/A 16+</p>
                        <p className="HD">HD</p>
                      </div>
                      <p className="movie-desc">
                        {items.overview && items.overview.slice(0, 80) + "..."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="search-data">
              {searchData &&
                searchData.length > 0 &&
                searchData.slice(0, 16).map((items) => {
                  return (
                    <div className="search-movies">
                      <img
                        src={
                          items.backdrop_path === null || !items.backdrop_path
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        className="poster-7"
                      />
                      <div className="movie-all-data2">
                        <div className="movie-title">
                          {items.title || items.name}
                        </div>
                        <div className="two-buttons">
                          <img src={play} className="circle-play" />
                          <img
                            onClick={() => {
                              if (!isAdded(items.id)) {
                                dispatch(AddToList(items));
                              } else {
                                dispatch(RemoveList(items.id));
                              }
                            }}
                            src={
                              isAdded(items.id) ? added : add
                            }
                            className="add-list"
                          />
                        </div>
                        <div className="extra-data">
                          <p className="match">
                            {(Math.round(items.vote_average) / 10) * 100}% match
                          </p>
                          <p className="rating">U/A 16+</p>
                          <p className="HD">HD</p>
                        </div>
                        <p className="movie-desc">
                          {items.overview && items.overview.length > 80
                            ? items.overview.slice(0, 80) + "..."
                            : items.overview}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <p className="list-name">My List</p>
            <div className="my-list">
              {ListItems.length === 0 ? (
                <p className="empty">Nothing to show here..</p>
              ) : (
                ListItems.map((items) => {
                  return (
                    <div className="list-movies">
                      <img
                        src={
                          items.backdrop_path === null || !items.backdrop_path
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        className="poster-7"
                      />
                      <div className="movie-all-data2">
                        <div className="movie-title">
                          {items.title || items.name}
                        </div>
                        <div className="two-buttons">
                          <img src={play} className="circle-play" />
                          <img
                            onClick={() => {
                              if (!isAdded(items.id)) {
                                dispatch(AddToList(items));
                              } else {
                                dispatch(RemoveList(items.id));
                              }
                            }}
                            src={
                              isAdded(items.id) ? added : add
                            }
                            className="add-list"
                          />
                        </div>
                        <div className="extra-data">
                          <p className="match">
                            {(Math.round(items.vote_average) / 10) * 100}% match
                          </p>
                          <p className="rating">U/A 16+</p>
                          <p className="HD">HD</p>
                        </div>
                        <p className="movie-desc">
                          {items.overview && items.overview.slice(0, 80) + "..."}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="new-left01">
              <img
                onClick={() => {
                  const carousel = document.querySelector(
                    ".movies-category-01"
                  );
                  carousel.scrollLeft -= 1200;
                }}
                src={left}
                className="new-leftbtn-01"
              />
            </div>
            <div className="new-right01">
              <img
                onClick={() => {
                  const carousel = document.querySelector(
                    ".movies-category-01"
                  );
                  carousel.scrollLeft += 1200;
                }}
                src={right}
                className="new-rightbtn-01"
              />
            </div>
            <p className="new-title01">Most Liked</p>
            <div className="movies-category-01">
              {movies2.map((items) => {
                return (
                  <>
                    <div className="now-playing" key={items.id}>
                      <img
                        src={
                          items.backdrop_path === null || !items.backdrop_path
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        className="poster-2"
                      />
                      <div className="movie-all-data">
                        <div className="movie-title">
                          {items.title || items.name}
                        </div>
                        <div className="two-buttons">
                          <img src={play} className="circle-play" />
                          <img
                            onClick={() => {
                              if (!isAdded(items.id)) {
                                dispatch(AddToList(items));
                              } else {
                                dispatch(RemoveList(items.id));
                              }
                            }}
                            src={
                              isAdded(items.id) ? added : add
                            }
                            className="add-list"
                          />
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
                          {items.overview && items.overview.slice(0, 80) + "..."}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="new-left02">
              <img
                onClick={() => {
                  const carousel = document.querySelector(
                    ".movies-category-02"
                  );
                  carousel.scrollLeft -= 1200;
                }}
                src={left}
                className="new-leftbtn-02"
              />
            </div>
            <div className="new-right02">
              <img
                onClick={() => {
                  const carousel = document.querySelector(
                    ".movies-category-02"
                  );
                  carousel.scrollLeft += 1200;
                }}
                src={right}
                className="new-rightbtn-02"
              />
            </div>
            <p className="new-title02">Recommendations</p>
            <div className="movies-category-02">
              {Recommendation.map((items) => {
                return (
                  <>
                    <div className="now-playing" key={items.id}>
                      <img
                        src={
                          items.backdrop_path === null || !items.backdrop_path
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        className="poster-2"
                      />
                      <div className="movie-all-data">
                        <div className="movie-title">
                          {items.title || items.name}
                        </div>
                        <div className="two-buttons">
                          <img src={play} className="circle-play" />
                          <img
                            onClick={() => {
                              if (!isAdded(items.id)) {
                                dispatch(AddToList(items));
                              } else {
                                dispatch(RemoveList(items.id));
                              }
                            }}
                            src={
                              isAdded(items.id) ? added : add
                            }
                            className="add-list"
                          />
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
                          {items.overview && items.overview.slice(0, 80) + "..."}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="new-left03">
              <img
                onClick={() => {
                  const carousel = document.querySelector(
                    ".movies-category-03"
                  );
                  carousel.scrollLeft -= 1200;
                }}
                src={left}
                className="new-leftbtn-03"
              />
            </div>
            <div className="new-right03">
              <img
                onClick={() => {
                  const carousel = document.querySelector(
                    ".movies-category-03"
                  );
                  carousel.scrollLeft += 1200;
                }}
                src={right}
                className="new-rightbtn-03"
              />
            </div>
            <p className="new-title03">Top Trending Shows</p>
            <div className="movies-category-03">
              {TrendingTV.map((items) => {
                return (
                  <>
                    <div className="now-playing" key={items.id}>
                      <img
                        src={
                          items.backdrop_path === null || !items.backdrop_path
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        className="poster-2"
                      />
                      <div className="movie-all-data">
                        <div className="movie-title">
                          {items.title || items.name}
                        </div>
                        <div className="two-buttons">
                          <img src={play} className="circle-play" />
                          <img
                            onClick={() => {
                              if (!isAdded(items.id)) {
                                dispatch(AddToList(items));
                              } else {
                                dispatch(RemoveList(items.id));
                              }
                            }}
                            src={
                              isAdded(items.id) ? added : add
                            }
                            className="add-list"
                          />
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
                          {items.overview && items.overview.slice(0, 80) + "..."}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="new-left04">
              <img
                onClick={() => {
                  const carousel = document.querySelector(
                    ".movies-category-04"
                  );
                  carousel.scrollLeft -= 1200;
                }}
                src={left}
                className="new-leftbtn-04"
              />
            </div>
            <div className="new-right04">
              <img
                onClick={() => {
                  const carousel = document.querySelector(
                    ".movies-category-04"
                  );
                  carousel.scrollLeft += 1200;
                }}
                src={right}
                className="new-rightbtn-04"
              />
            </div>
            <p className="new-title04">Best Fictional Shows</p>
            <div className="movies-category-04">
              {Fiction.map((items) => {
                return (
                  <>
                    <div className="now-playing" key={items.id}>
                      <img
                        src={
                          items.backdrop_path === null || !items.backdrop_path
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        className="poster-2"
                      />
                      <div className="movie-all-data">
                        <div className="movie-title">
                          {items.title || items.name}
                        </div>
                        <div className="two-buttons">
                          <img src={play} className="circle-play" />
                          <img
                           onClick={() => {
                            if (!isAdded(items.id)) {
                              dispatch(AddToList(items));
                            } else {
                              dispatch(RemoveList(items.id));
                            }
                          }}
                          src={
                            isAdded(items.id) ? added : add
                          }
                            className="add-list"
                          />
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
                          {items.overview && items.overview.slice(0, 80) + "..."}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-area"></div>
    </>
  );
};

export default Browsepage;
