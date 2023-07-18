import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { movieAction } from "../redux/actions/movieAction";
import YouTube from "react-youtube";
import MovieSlide from "../Components/MovieSlide";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = parseInt(id);

  const dispatch = useDispatch();

  const { popularMovies, topRatedMovies, upComingMovies, genreList, loading } =
    useSelector((state) => state.movie);
  const allmovies = [popularMovies, topRatedMovies, upComingMovies];
  const movieData = allmovies.map((item) =>
    item.results.find((it) => it.id === movieId)
  );
  //필터함수를 쓰면 오류남..
  //파인드함수도 해당 페이지 새로고침시 오류발생..
  console.log(allmovies);
  console.log(movieData);
  //데이터가 0번째 인덱스값으로 들어감..

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

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
              `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieData[0].backdrop_path}` +
              ")",
          }}
        >
          <div className="poster_section">
            <div className="poster_img">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieData[0].poster_path}`}
              />
            </div>
            <div className="movie_info">
              <div className="moive_title">
                <h1>{movieData[0].original_title}</h1>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ marginRight: "5px" }}
                  />
                  {movieData[0].vote_average}
                </span>
                <div className="date">{movieData[0].release_date}</div>
              </div>
              <div>
                {movieData[0].genre_ids.map((id) => (
                  <Badge bg="danger" style={{ marginRight: "10px" }}>
                    {genreList.find((item) => item.id === id).name}
                  </Badge>
                ))}
                <div className="adult">
                  {movieData[0].adult ? "청불" : "Under 18"}
                </div>
              </div>
              <p>{movieData[0].overview}</p>
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
        <YouTube videoId="JqcncLPi9zw" opts={opts} />
        <h1 className="subTitle">Another Movie</h1>
        <MovieSlide movies={popularMovies} />
      </div>
    );
  }
};

export default MovieDetail;
