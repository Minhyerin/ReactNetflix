import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import Navigation from "./Components/Navigation";
import { movieAction } from "./redux/actions/movieAction";
import { useSelector } from "react-redux";
// 1. 3개페이지 : 홈페이지, 무비페이지, 무비 디테일 페이지
// 2. 홈페이지 배너
// 3. 홈페이지 3가지 섹션(popular, top rated, upcomming) -> (슬라이드)
// 4. 홈페이지 영화 마우스 오버시 제목, 장르, 점수 , 인기도, 청불여부

function App() {
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  return (
    <div className="wrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
