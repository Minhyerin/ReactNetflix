import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Movies = () => {
  const [filterdList, setFilteredList] = useState([]);
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  const allmovies = [
    ...popularMovies.results,
    ...topRatedMovies.results,
    ...upComingMovies.results,
  ];

  const { keyword } = useSelector((state) => state.search);
  console.log(keyword);

  useEffect(() => {
    if (keyword !== "") {
      let list = allmovies.filter((item) =>
        item.title.toLowerCase().includes(keyword)
      );
      setFilteredList(list);
    } else {
      setFilteredList(allmovies);
    }
  }, [keyword]);

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color={"#fff"} loading={loading} size={150} />
      </div>
    );
  } else {
    return (
      <div className="Movies">
        <div>
          <h1>Search Movies</h1>
        </div>

        <div className="movies-wrapper">
          {filterdList.map((it) => (
            <div className="movie">
              <img
                src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${it.poster_path}`}
              />
              <div className="movie-title">{it.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Movies;
