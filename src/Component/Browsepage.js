import { React, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase";
import { useSelector, useDispatch } from "react-redux";
import { AddToList, RemoveList } from "../action/add";
import Poster from "../img/movie/bg-poster.png";
import avatar from "../img/avatar.png";
import Logo from "../img/logo.png";
import Search from "../img/search.png";
import left from "../img/left.png";
import right from "../img/right.png";
import play from "../img/play.png";
import add from "../img/add.png";
import added from "../img/added.png";

const auth = getAuth(app);

const Browsepage = (props) => {
  const ListItems = useSelector((state) => state.MoviesAdded.ListItems);
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);
  const [Trending, setTrending] = useState([]);
  const [Rated, setRated] = useState([]);
  const [Added, setAdded] = useState(false);
  const [Anime1, setAnime1] = useState([]);
  const [TV, setTV] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const SearchChange = () => {
    document.querySelector(".search-white").style.opacity = "0";
    document.querySelector(".search-bar").style.opacity = "1";
  };

  const OnSearch = async (e) => {
    const searchValue = e.target.value;
    document.querySelector(".poster").style.display = "none";
    document.querySelector(".my-list").style.display = "none";
    document.querySelector(".search-data").style.display = "grid";

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0bee82696d9f2ec6851e2a729cf4c379&language=en-US&query=${searchValue}&page=1&include_adult=false`
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
      document.querySelector(".movie-category1").style.display = "flex";
      document.querySelector(".movie-category2").style.display = "flex";
      document.querySelector(".movie-category3").style.display = "flex";
      document.querySelector(".movie-category4").style.display = "flex";
      document.querySelector(".movie-category5").style.display = "flex";
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
    } else {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=0bee82696d9f2ec6851e2a729cf4c379&language=en-US&query=${searchValue}&page=1&include_adult=false`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchData(data.results);
    }
  };

  const MyList = () => {
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
    document.querySelector(".tv-shows").style.color =
      "rgba(255, 255, 255, 0.742)";
    document.querySelector(".tv-shows").style.fontWeight = "400";
    document.querySelector(".poster").style.display = "none";
    document.querySelector(".search-data").style.display = "none";
    document.querySelector(".my-list").style.display = "grid";
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
  };

  const Home = () => {
    document.querySelector(".home").style.color = "white";
    document.querySelector(".home").style.fontWeight = "600";
    document.querySelector(".list").style.color = "rgba(255, 255, 255, 0.742)";
    document.querySelector(".list").style.fontWeight = "400";
    document.querySelector(".movies").style.color =
      "rgba(255, 255, 255, 0.742)";
    document.querySelector(".movies").style.fontWeight = "400";
    document.querySelector(".tv-shows").style.color =
      "rgba(255, 255, 255, 0.742)";
    document.querySelector(".tv-shows").style.fontWeight = "400";
    document.querySelector(".poster").style.display = "block";
    document.querySelector(".search-data").style.display = "none";
    document.querySelector(".my-list").style.display = "none";
    document.querySelector(".movie-category1").style.display = "flex";
    document.querySelector(".movie-category2").style.display = "flex";
    document.querySelector(".movie-category3").style.display = "flex";
    document.querySelector(".movie-category4").style.display = "flex";
    document.querySelector(".movie-category5").style.display = "flex";
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
  };

  useEffect(() => {
    const FetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=0bee82696d9f2ec6851e2a729cf4c379&language=en-US&page=1";
      const data = await fetch(url);
      const new_data = await data.json();
      setMovies(new_data.results);
    };
    const TrendingMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/trending/movie/day?api_key=0bee82696d9f2ec6851e2a729cf4c379";
      const data = await fetch(url);
      const new_data = await data.json();
      setTrending(new_data.results);
    };
    const TopRated = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=0bee82696d9f2ec6851e2a729cf4c379&language=en-US&page=1";
      const data = await fetch(url);
      const new_data = await data.json();
      setRated(new_data.results);
    };
    const ClassicAnime = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/129/recommendations?api_key=0bee82696d9f2ec6851e2a729cf4c379&language=en-US&page=1";
      const data = await fetch(url);
      const new_data = await data.json();
      setAnime1(new_data.results);
    };
    const TVshows = async () => {
      const url =
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=0bee82696d9f2ec6851e2a729cf4c379&language=en-US&page=1";
      const data = await fetch(url);
      const new_data = await data.json();
      setTV(new_data.results);
    };

    FetchData();
    TrendingMovies();
    TopRated();
    ClassicAnime();
    TVshows();
  }, []);

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
            <li className="movies" style={{ width: "4.5vw" }}>
              Movies
            </li>
            <li className="tv-shows" style={{ width: "4.5vw" }}>
              TV Shows
            </li>
          </div>
          <div className="right-content">
            <div onClick={SearchChange} className="search-icon">
              <img src={Search} alt="" className="search-white" />
              <input
                onChange={OnSearch}
                type="text"
                value={search}
                className="search-bar"
                placeholder="Search Movies, TV Shows.."
              />
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
          <div className="all-dataa">
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
                          "https://image.tmdb.org/t/p/w500" +
                          items.backdrop_path
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
                              setAdded(!Added);
                              if (Added) {
                                dispatch(RemoveList(items.id));
                              } else {
                                dispatch(AddToList(items));
                              }
                            }}
                            src={
                              ListItems.filter((ele) => ele.id === items.id)
                                .length > 0
                                ? added
                                : add
                            }
                            className="add-list"
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
                          {items.overview.slice(0, 80) + "..."}
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
                        <img src={play} alt="" className="circle-play" />
                        <img
                          onClick={() => {
                            setAdded(!Added);
                            if (Added) {
                              dispatch(RemoveList(items.id));
                            } else {
                              dispatch(AddToList(items));
                            }
                          }}
                          src={
                            ListItems.filter((ele) => ele.id === items.id)
                              .length > 0
                              ? added
                              : add
                          }
                          className="add-list"
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
                        {items.overview.slice(0, 80) + "..."}
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
                alt=""
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
                alt=""
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
                        "https://image.tmdb.org/t/p/w500" + items.backdrop_path
                      }
                      alt=""
                      className="poster-4"
                    />
                    <div className="movie-all-data">
                      <div className="movie-title">{items.title}</div>
                      <div className="two-buttons">
                        <img src={play} alt="" className="circle-play" />
                        <img
                          onClick={() => {
                            setAdded(!Added);
                            if (Added) {
                              dispatch(RemoveList(items.id));
                            } else {
                              dispatch(AddToList(items));
                            }
                          }}
                          src={
                            ListItems.filter((ele) => ele.id === items.id)
                              .length > 0
                              ? added
                              : add
                          }
                          className="add-list"
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
                        {items.overview.slice(0, 80) + "..."}
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
                alt=""
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
                alt=""
                className="right-btn4"
              />
            </div>
            <p className="category-title4 c-title">Masterpiece from Japan</p>
            <div className="movie-category4">
              {Anime1.map((items) => {
                return (
                  <div className="anime1-movies">
                    <img
                      src={
                        items.backdrop_path === null
                          ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                          : "https://image.tmdb.org/t/p/w500" +
                            items.backdrop_path
                      }
                      alt=""
                      className="poster-5"
                    />
                    <div className="movie-all-data">
                      <div className="movie-title">{items.title}</div>
                      <div className="two-buttons">
                        <img src={play} alt="" className="circle-play" />
                        <img
                          onClick={() => {
                            setAdded(!Added);
                            if (Added) {
                              dispatch(RemoveList(items.id));
                            } else {
                              dispatch(AddToList(items));
                            }
                          }}
                          src={
                            ListItems.filter((ele) => ele.id === items.id)
                              .length > 0
                              ? added
                              : add
                          }
                          className="add-list"
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
                        {items.overview.slice(0, 80) + "..."}
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
                alt=""
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
                alt=""
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
                        items.backdrop_path === null
                          ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                          : "https://image.tmdb.org/t/p/w500" +
                            items.backdrop_path
                      }
                      alt=""
                      className="poster-6"
                    />
                    <div className="movie-all-data">
                      <div className="movie-title">{items.name}</div>
                      <div className="two-buttons">
                        <img src={play} alt="" className="circle-play" />
                        <img
                          onClick={() => {
                            setAdded(!Added);
                            if (Added) {
                              dispatch(RemoveList(items.id));
                            } else {
                              dispatch(AddToList(items));
                            }
                          }}
                          src={
                            ListItems.filter((ele) => ele.id === items.id)
                              .length > 0
                              ? added
                              : add
                          }
                          className="add-list"
                        />
                      </div>
                      <div className="extra-data">
                        <p className="match">
                          {(Math.round(items.vote_average) / 10) * 100}% match
                        </p>
                        <p className="rating">U/A 13+</p>
                        <p className="HD">HD</p>
                      </div>
                      <p className="movie-desc">
                        {items.overview.slice(0, 80) + "..."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="search-data">
              {searchData &&
                searchData.slice(0, 16).map((items) => {
                  return (
                    <div className="search-movies">
                      <img
                        src={
                          items.backdrop_path === null
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        alt=""
                        className="poster-7"
                      />
                      <div className="movie-all-data2">
                        <div className="movie-title">{items.title}</div>
                        <div className="two-buttons">
                          <img src={play} alt="" className="circle-play" />
                          <img
                            onClick={() => {
                              setAdded(!Added);
                              if (Added) {
                                dispatch(AddToList(items));
                              } else {
                                dispatch(RemoveList(items.id));
                              }
                            }}
                            src={
                              ListItems.filter((ele) => ele.id === items.id)
                                .length > 0
                                ? added
                                : add
                            }
                            className="add-list"
                          />
                        </div>
                        <div className="extra-data">
                          <p className="match">
                            {(Math.round(items.vote_average) / 10) * 100}% match
                          </p>
                          <p className="rating">U/A 13+</p>
                          <p className="HD">HD</p>
                        </div>
                        <p className="movie-desc">
                          {items.overview.slice(0, 80) + "..."}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="my-list">
              {ListItems.length === 0 ? (
                <p className="empty">Nothing to show here</p>
              ) : (
                ListItems.map((items) => {
                  return (
                    <div className="list-movies">
                      <img
                        src={
                          items.backdrop_path === null
                            ? "https://images.hdqwalls.com/wallpapers/logan-movie-poster-pt.jpg"
                            : "https://image.tmdb.org/t/p/w500" +
                              items.backdrop_path
                        }
                        alt=""
                        className="poster-7"
                      />
                      <div className="movie-all-data2">
                        <div className="movie-title">{items.title}</div>
                        <div className="two-buttons">
                          <img src={play} alt="" className="circle-play" />
                          <img
                            onClick={() => {
                              setAdded(Added);
                              if (Added) {
                                dispatch(RemoveList(items.id));
                              } else {
                                dispatch(AddToList(items));
                              }
                            }}
                            src={
                              ListItems.filter((ele) => ele.id === items.id)
                                .length > 0
                                ? added
                                : add
                            }
                            className="add-list"
                          />
                        </div>
                        <div className="extra-data">
                          <p className="match">
                            {(Math.round(items.vote_average) / 10) * 100}% match
                          </p>
                          <p className="rating">U/A 13+</p>
                          <p className="HD">HD</p>
                        </div>
                        <p className="movie-desc">
                          {items.overview.slice(0, 80) + "..."}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browsepage;
