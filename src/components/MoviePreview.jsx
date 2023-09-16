import React from "react";
import { BsStar } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import { useLocation } from "react-router-dom";
const MoviePreview = () => {
  const location = useLocation();
  const year = location?.state.release_date.split("-");
  return (
    <div className="flex-1 px-10 py-4 xs:text-[10px]">
      <div className="flex flex-col gap-y-2 h-full">
        <div className="flex-1 h-[60%]">
          <div className="overflow-hidden h-[80%] rounded-md">
            <img
              src={`https://image.tmdb.org/t/p/original${location?.state.backdrop_path}`}
              alt="vide_bg"
              className="w-[full] object-fit"
            />
          </div>
          <div className="flex xs:flex-col md:flex-row justify-between items-center my-4">
            <div className="flex xs:flex-col lg:flex-row md:items-start xs:items-center lg:items-center md:justify-center gap-x-4">
              <h4 className="font-bold text-xl" data-testid="movie-title">
                {location?.state.title}
              </h4>
              <div className="flex gap-x-2 items-center">
                <p data-testid="movie-release-date">{year[0]}</p>
                <p>PG-13</p>
                <span className="" data-testid="movie-release-date">
                  130min
                </span>
                <div className="cat flex items-center gap-x-3">
                  <span className="w-fit border border-1 rounded-md p-1 border-gray-300 md:before:text-sm text-[#be123c]">
                    Action
                  </span>
                  <span className="w-fit border border-1 rounded-md p-1 border-gray-300 md:before:text-sm text-[#be123c]">
                    Drama
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <BsStar />
              <p>
                <span className="text-gray-400 xs:text-[14px] lg:text-lg">
                  {location?.state.vote_average}
                </span>{" "}
                | 350k
              </p>
            </div>
          </div>
        </div>
        <div className="flex-2 h-[40%]">
          <div className="flex xs:flex-col-reverse lg:flex-row gap-x-4">
            <div className="flex-1">
              <div className="flex flex-col gap-y-4 xs:text-[10px]">
                <p data-testid="movie-overview">
                  {location?.state.overview || <Skeleton />}
                </p>
                <div className="">
                  <p>
                    Director:{" "}
                    <span className="text-[#be123c]">Joseph Kosinski</span>
                  </p>
                  <p>
                    Writer{" "}
                    <span className="text-[#be123c]">
                      Jim cash, Jack Eppsjr, Peter Craig
                    </span>
                  </p>
                  <p>
                    Stars{" "}
                    <span className="text-[#be123c]">
                      Tom Cruise, Jennifer Connely, Miles Teller
                    </span>
                  </p>
                </div>
                <div className="flex border border-1 border-gray-200 w-[75%] overflow-hidden rounded-md pr-4">
                  <button className="text-white bg-[#be123c] p-2">
                    Top rated movie #65
                  </button>
                  <select className="border-none p-2  w-full outline-none">
                    <option value="">Awards 9 nominations</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex-2 md:w-[250px] xs:w-full">
              <div className="flex xs:flex-row lg:flex-col gap-2 mb-4">
                <button className="bg-[#be123c] text-white p-2 rounded-md md:w-full xs:w-fit">
                  See Showtimes
                </button>
                <button className="bg-[#f296ad] p-2 rounded-md md:w-full xs:w-fit">
                  More watch options
                </button>
              </div>
              <div className="w-full h-200px rounded-lg xs:hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePreview;
