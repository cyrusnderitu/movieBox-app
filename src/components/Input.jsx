import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${title}`);
    setTitle("");
  };
  return (
    <div className="search flex items-center justify-between border-2 border-white rounded-lg w-[50%] xs:px-2 md:px-4 md:py-1">
      <form
        className="border-none bg-trasnparent w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="What do you want to watch ?"
          className=" indent-2 border-none xs:placeholder:text-[11px]  lg:placeholder:text-[16px] bg-transparent outline-none placeholder:text-white w-full text-white"
        />
      </form>
      <BiSearch className="text-white md:block xs:hidden" />
    </div>
  );
};

export default Input;
