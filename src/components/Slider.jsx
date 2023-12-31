import React from "react";
// import BG from "../Assets/PosterHeroImg.png";
import { FiPlayCircle } from "react-icons/fi";
import tomato from "../Assets/tomato.png";
import IMDB from "../Assets/imdb.png";

const Slider = ({ movie }) => {
  return (
    <div
      className="heroImg absolute top-0 w-full h-full bg-no-repeat text-white bg-cover xs:px-8 md:px-16 flex flex-col justify-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="align-left gap flex flex-col gap-y-4 xs:text-[14px]">
        <h1 className="text-white md:text-4xl xs:text-2xl font-semibold md:w-1/2 sm:w-[80%]">
          {movie.title}
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
        <div className="description md:w-3/2 lg:w-1/2 sm:w-[80%]">
          {movie.overview}
        </div>
        <div className="button cursor-pointer border-none w-fit py-2 px-4 flex items-center gap-2 bg-[#BE123C] rounded-lg">
          <FiPlayCircle className="fill-[#BE123C] xs:text-md md:text-2xl" />
          <button className="border-none outline-none font-bold xs:text-[12px] md:text-md">
            WATCH TRAILER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
