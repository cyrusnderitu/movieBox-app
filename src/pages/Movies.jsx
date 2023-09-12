import React from "react";
import Sidebar from "../components/Sidebar";
import MoviePreview from "../components/MoviePreview";
const Movies = () => {
  return (
    <div className="">
      <div className="h-screen flex">
        <Sidebar />
        <MoviePreview />
      </div>
    </div>
  );
};

export default Movies;
