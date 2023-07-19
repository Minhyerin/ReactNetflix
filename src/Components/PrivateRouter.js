import React from "react";
import MovieDetail from "../pages/MovieDetail";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ authenticate }) => {
  return authenticate === true ? <MovieDetail /> : <Navigate to="/login" />;
};

export default PrivateRouter;
