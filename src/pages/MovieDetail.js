import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { movieAction } from "../redux/actions/movieAction";
import YouTube from "react-youtube";
import MovieSlide from "../Components/MovieSlide";
import {
  faCalendar,
  faPlay,
  faStar,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  const movieItem = useLocation();
  const movieInfo = movieItem.state.value.item;
  const genreList = movieItem.state.genreContente.genreList;

  console.log(movieItem);
  console.log(movieInfo);

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color={"#fff"} loading={loading} size={150} />
      </div>
    );
  } else {
    return (
      <div className="MovieDetail">
        <div
          className="detail_banner"
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieInfo.backdrop_path}` +
              ")",
          }}
        >
          <div className="poster_section">
            <div className="poster_img">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieInfo.poster_path}`}
              />
            </div>
            <div className="movie_info">
              <div className="moive_title">
                <h1>{movieInfo.original_title}</h1>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "5px" }}
                  />
                  {movieInfo.vote_average}
                </span>
                <div className="date">
                  <FontAwesomeIcon
                    style={{ marginRight: "10px" }}
                    icon={faCalendar}
                  />
                  {movieInfo.release_date}
                </div>
              </div>
              <div>
                {movieInfo.genre_ids.map((id) => (
                  <Badge bg="danger" style={{ marginRight: "10px" }}>
                    {genreList.find((item) => item.id === id).name}
                  </Badge>
                ))}
                <div className="sub_info">
                  {movieInfo.adult ? "청불" : "Under 18"}
                  <span className="vote_count">
                    <FontAwesomeIcon
                      style={{ marginRight: "10px" }}
                      icon={faVoteYea}
                    />
                    {movieInfo.vote_count}
                  </span>
                </div>
              </div>
              <p>{movieInfo.overview}</p>
              <div className="btn">
                <Button>
                  <FontAwesomeIcon
                    icon={faPlay}
                    style={{ marginRight: "10px" }}
                  />
                  Play
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <h1 className="titleText">Another Movie</h1>
          <MovieSlide movies={popularMovies} />
        </div>
      </div>
    );
  }
};

export default MovieDetail;
