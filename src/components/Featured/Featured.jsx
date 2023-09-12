import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";

const Featured = () => {
  return (
    <div className="px-16 mt-4">
      <div className="top flex justify-between my-6">
        <h1 className="text-xl font-semibold">Featured Movies</h1>
        <Link className="text-[#be123c] items-center"> See more</Link>
      </div>
      <div className="moviesList grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 gap-8">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Featured;
