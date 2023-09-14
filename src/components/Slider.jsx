import React from "react";
// import BG from "../Assets/PosterHeroImg.png";
import { FiPlayCircle } from "react-icons/fi";
import tomato from "../Assets/tomato.png";
import IMDB from "../Assets/imdb.png";

const Slider = ({ movie }) => {
  return (
    <div
      className="heroImg absolute top-0 w-full h-full bg-no-repeat text-white bg-cover px-16 flex flex-col justify-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="align-left gap flex flex-col gap-y-4">
        <h1 className="text-white text-4xl font-semibold w-1/2">
          {movie.original_title}
        </h1>
        <div className="rating flex items-center gap-x-[10rem]">
          <div className="imdb flex items-center gap-x-2">
            <img src={IMDB} alt="imdb" />
            <p>860/100</p>
          </div>
          <div className="tomato flex items-center gap-x-2">
            <img src={tomato} alt="tomato" />
            <p>97%</p>
          </div>
        </div>
        <div className="description w-2/5">{movie.overview}</div>
        <div className="button cursor-pointer border-none w-fit py-2 px-4 flex items-center gap-2 bg-[#BE123C] rounded-lg">
          <FiPlayCircle className="fill-[#BE123C] text-2xl" />
          <button className="border-none outline-none font-bold text-md">
            WATCH TRAILER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
