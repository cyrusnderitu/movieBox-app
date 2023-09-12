import React from "react";
import { BsStar } from "react-icons/bs";
const MoviePreview = () => {
  return (
    <div className="flex-1 px-10 py-4">
      <div className="flex flex-col gap-y-2 h-full">
        <div className="flex-1 h-[60%]">
          <video src="" className="h-[90%]"></video>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-x-4 bg-slate-200">
              <h4>Top Gun Maverick</h4>
              <p>2022</p>
              <p>PG-13</p>
              <div className="cat flex items-center gap-x-3">
                <span className="w-fit border border-1 rounded-md p-1 border-gray-300 text-sm text-[#be123c]">
                  Action
                </span>
                <span className="w-fit border border-1 rounded-md p-1 border-gray-300 text-sm text-[#be123c]">
                  Drama
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <BsStar />
              <p>
                <span className="text-gray-200 text-lg">8.5</span> | 350k
              </p>
            </div>
          </div>
        </div>
        <div className="flex-2 h-[40%]">
          <div className="flex gap-x-4">
            <div className="flex-1">
              <div className="flex flex-col gap-y-4">
                <p>
                  After thirty years, Maverick is still pushing the envelope as
                  a top naval aviator, but must confront ghosts of his past when
                  he leads TOP GUN's ellite graduates on a mission that demands
                  the ultimate sacrificce from those chosen to fly it
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
                <div className="flex border border-1 border-gray-200 w-[50%] overflow-hidden rounded-md">
                  <button className="text-white bg-[#be123c] p-2">
                    Top rated movie #65
                  </button>
                  <select className="border-none p-2">
                    <option value="">Awards 9 nominations</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex-2 w-[250px]">
              <button className="bg-[#be123c] text-white p-2 rounded-md w-full">
                See Showtimes
              </button>
              <button className="bg-[#f296ad] p-2 rounded-md mt-3 w-full">
                More watch options
              </button>
              <div className="w-full h-200px rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePreview;
