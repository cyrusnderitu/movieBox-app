import React, { useRef, useState } from "react";
import tomato from "../Assets/tomato.png";
import IMDB from "../Assets/imdb.png";
// import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const movieContent = useRef(movie);
  const handleNavigate = () => {
    navigate(`/movie/${movie.original_title}`, { state: movieContent.current });
  };
  const [fav, setFav] = useState(false);
  const handleFav = () => {
    setFav(!fav);
  };
  return (
    <div
      className="flex flex-col xs:text-[14px] shadow-md overflow-hidden rounded-sm h-[350px] hover:cursor-pointer relative"
      data-testid="movie-card"
    >
      <div
        className="top flex-1 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie?.poster_path})`,
        }}
        data-testid="movie-poster"
      >
        <span
          className="fav absolute top-4 right-4 bg-gray-300 cursor-pointer rounded-[50%] text-black p-1"
          onClick={handleFav}
        >
          {fav === true ? (
            <AiFillHeart className="text-xl fill-yellow-500" />
          ) : (
            <AiOutlineHeart className="text-xl" />
          )}
        </span>
      </div>
      <div className="bottom p-4 block flex-2" onClick={handleNavigate}>
        <span>USA, 2016 Current</span>
        <h4 className="md:text-md" data-tesid="movie-title">
          {movie?.title}
        </h4>
        <div className="flex items-center justify-between text-[12px]">
          <div className="imdb flex flex-row items-center gap-x-2">
            <img src={IMDB} alt="imdb" className="w-[40%]" />
            <p>860/100</p>
          </div>
          <div className="tomato flex items-center gap-x-2">
            <img src={tomato} alt="tomato" className="w-[40%]" />
            <p>97%</p>
          </div>
        </div>
        <span>Action, Adventure, Horror</span>
      </div>
    </div>
  );
};

export default MovieCard;
