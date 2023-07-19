import React from "react";
import { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/Banner";
import MovieSlide from "../Components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  // 로딩 = true(데이터 도착 전) => 로딩스피너  로딩 = false(데이터 도착 후) => 데이터
  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color={"#fff"} loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="body_wrapper">
      <Banner movie={popularMovies.results[0]} />
      <div className="slide">
        <h1 className="titleText">Popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1 className="titleText">Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1 className="titleText">Upcoming Movie</h1>
        <MovieSlide movies={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;
//단락평가 하는 이유 랜더링이 되는 순서때문
// return 문이 먼저 실행되고, useEffect가 실행됨
// 일단 랜더링 -> 단락회로 평가 : 데이터값이 없어서 -> useEffect 실행 -> 데이터가 있음 리턴문실행
//데이터가 없을땐 스피너가 돌게되서 단락회로 평가가 필요없게 됨
