import React from "react";
import tomato from "../Assets/tomato.png";
import IMDB from "../Assets/imdb.png";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const MovieCard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/movie/Stanger");
  };
  return (
    <div
      className="flex flex-col shadow-md overflow-hidden rounded-sm h-[350px] hover:cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="top flex-1 bg-slate-200">{<Skeleton />}</div>
      <div className="bottom p-4 block flex-2">
        <span>USA, 2016 Current</span>
        <h4 className="text-md">Stranger Things</h4>
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
