import React from "react";
import logo from "../Assets/Logo.png";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-16 h-[4rem] z-40 absolute t-0 w-full">
      <div className="logo flex items-center gap-x-2">
        <img src={logo} alt="logo" className="w-[25%]" />
        <h2 className="text-white text-2xl font-semibold">MovieBox</h2>
      </div>
      <div className="search flex items-center justify-between border-2 border-white rounded-lg w-[50%] px-4 py-1">
        <form className="border-none bg-trasnparent w-full">
          <input
            type="text"
            name=""
            placeholder="What do you want to watch ?"
            className=" indent-2 border-none bg-transparent outline-none placeholder:text-white w-full text-white"
          />
        </form>
        <BiSearch className="text-white" />
      </div>
      <div className="account text-white">
        <p className="font-600">Sign in</p>
      </div>
    </div>
  );
};

export default Navbar;
