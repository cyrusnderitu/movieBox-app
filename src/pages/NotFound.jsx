import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="bg-[#be123c] h-[4rem]">
        <Navbar />
      </div>
      <div className="bg-slate-300 h-screen flex flex-col items-center justify-center gap-y-4">
        <h4 className="text-xl font-bold">Oops!!</h4>
        <h1 className="text-black text-8xl font-bold">404</h1>
        <p className="text-sm">Search or Page not Found</p>
        <button
          className="bg-[#be123c] text-white xs:text-md lg:text-xl p-2 rounded-md border-none cursor-pointer font-semi-bold"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
