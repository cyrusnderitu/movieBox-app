import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 h-[16rem]">
      <div className="">
        <div className="socials flex justify-center">
          <ul className="flex items-center gap-x-4">
            <li className="hover:bg-[#be123c] rounded-[50%] p-2 cursor-pointer">
              <BsFacebook className="text-xl" />
            </li>
            <li className="hover:bg-[#be123c] rounded-[50%] p-2 cursor-pointer">
              <BsInstagram className="text-xl" />
            </li>
            <li className="hover:bg-[#be123c] rounded-[50%] p-2 cursor-pointer">
              <BsTwitter className="text-xl" />
            </li>
            <li className="hover:bg-[#be123c] rounded-[50%] p-2 cursor-pointer">
              <BsYoutube className="text-xl" />
            </li>
          </ul>
        </div>
        <div className=" flex md:flex-row xs:flex-col gap-y-4 items-center gap-x-10 my-6">
          <span className="font-semibold text-black">Conditions of Use</span>
          <span className="font-semibold text-black">Privacy & Policy</span>
          <span className="font-semibold text-black">Press Room</span>
        </div>
      </div>
      <span className="text-gray-500 text-[14px]">
        &#169; 2021 MovieBox By Cyrus Nderitu K
      </span>
    </div>
  );
};

export default Footer;
