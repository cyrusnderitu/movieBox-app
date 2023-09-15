import React from "react";
import Sidebar from "../components/Sidebar";
import MoviePreview from "../components/MoviePreview";
const Movies = () => {
  return (
    <div className="h-full">
      <div className="flex">
        <div className="md:fixed md:block h-screen xs:hidden">
          <Sidebar />
        </div>
        <div className="md:ml-[200px]">
          <MoviePreview />
        </div>
      </div>
    </div>
  );
};

export default Movies;
