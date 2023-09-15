import React from "react";
import logo from "../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { BiCameraMovie } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full md:text-[13px] lg:text-[15px]">
      <div className="flex-2 w-[200px] border-2 rounded-tr-[20px] rounded-br-[20px] p-4">
        <div className="flex flex-col justify-between items-center h-full">
          <div
            className="logo flex items-center gap-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="w-[40px]" />
            <h2 className="text-lg font-semibold">MovieBox</h2>
          </div>
          <div className="menu w-full">
            <ul className="flex flex-col items-center md:gap-y-4 sm:gap-y-2 w-[calc(100%+2rem) -ml-[1rem] -mr-[1rem]">
              <li className="hover:bg-[#fcc4d2] cursor-pointer w-full py-2">
                <Link
                  to={"/"}
                  className="w-full mx-8 flex items-center gap-x-2"
                >
                  <AiFillHome />
                  Home
                </Link>
              </li>
              <li className="hover:bg-[#fcc4d2] cursor-pointer w-full py-2">
                <Link
                  to={"/"}
                  className="w-full mx-8 flex items-center gap-x-2"
                >
                  <BiCameraMovie />
                  Movies
                </Link>
              </li>
              <li className="hover:bg-[#fcc4d2] cursor-pointer w-full py-2">
                <Link
                  to={"/"}
                  className="w-full mx-8 flex items-center gap-x-2"
                >
                  <PiTelevisionBold />
                  TV Series
                </Link>
              </li>
              <li className="hover:bg-[#fcc4d2] cursor-pointer w-full py-2">
                <Link
                  to={"/"}
                  className="w-full mx-8 flex items-center gap-x-2"
                >
                  <BsCalendar3 />
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
          <div className="account">
            <div className="bg-[#fcc4d2] border border-1 border-[#be123c] rounded-lg py-4 px-2 mb-8 flex flex-col items-center">
              <h4 className="font-semibold mb-2">
                Play movie quizes and earn free tickets
              </h4>
              <p className="text-[12px]">50k people are playin now</p>
              <button className="text-[12px] font-semibold text-[#be123c] bg-[#fc8ca8] rounded-2xl py-1 px-2">
                Start Playing
              </button>
            </div>
            <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
