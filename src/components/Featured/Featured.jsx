import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import { MovieContext } from "../../context/MovieContext";

const Featured = () => {
  const { data } = useContext(MovieContext);
  return (
    <div className="px-16 mt-4">
      <div className="top flex justify-between my-6">
        <h1 className="text-xl font-semibold">Featured Movies</h1>
        <Link className="text-[#be123c] items-center"> See more</Link>
      </div>
      <div className="moviesList grid lg:grid-cols-[repeat(4,minmax(150px,300px))] md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 gap-8">
        {data?.results.slice(3, 7).map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
