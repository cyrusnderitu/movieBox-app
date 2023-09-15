import React from "react";
import logo from "../Assets/Logo.png";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-16 h-[4rem] z-40 absolute t-0 w-full">
      <div
        className="logo flex items-center gap-x-2 hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="xs:w-[30px] md:w-[50px]" />
        <h2 className="text-white md:text-lg lg:text-xl font-semibold xs:hidden md:block">
          MovieBox
        </h2>
      </div>
      <Input />
      <div className="account text-white">
        <p className="font-600 xs:text-[12px] md:text-[16px]">Sign in</p>
      </div>
    </div>
  );
};

export default Navbar;
