import React from "react";
import Sidebar from "../components/Sidebar";
import MoviePreview from "../components/MoviePreview";
const Movies = () => {
  return (
    <div className="h-full">
      <div className="flex">
        <div className="fixed h-screen">
          <Sidebar />
        </div>
        <div className="ml-[200px]">
          <MoviePreview />
        </div>
      </div>
    </div>
  );
};

export default Movies;
