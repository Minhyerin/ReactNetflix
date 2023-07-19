import "./App.css";
import { Routes, Route } from "react-router-dom";
import { movieAction } from "./redux/actions/movieAction";
import { useSelector } from "react-redux";
import { useState } from "react";
import Navigation from "./Components/Navigation";
import PrivateRouter from "./Components/PrivateRouter";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import Login from "./pages/Login";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div className="wrapper">
      <Navigation
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:id"
          element={<PrivateRouter authenticate={authenticate} />}
        />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
