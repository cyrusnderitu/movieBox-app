import React from "react";
import Navbar from "../components/Navbar";
import useSearchFetcher from "../hooks/useSearchFetcher";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Search = () => {
  const { title } = useParams();
  const { data } = useSearchFetcher(title);
  return (
    <div className="w-full">
      <div className="bg-[#be123c] h-[4rem]">
        <Navbar />
      </div>
      <div className="px-16">
        <div className="moviesList grid lg:grid-cols-[repeat(4,minmax(150px,300px))] md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 gap-8 mt-[6rem]">
          {data?.results.slice(3, 7).map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
