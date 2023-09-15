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
    <div className="search flex items-center justify-between border-2 border-white rounded-lg w-[50%] px-4 py-1">
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
          className=" indent-2 border-none bg-transparent outline-none placeholder:text-white w-full text-white"
        />
      </form>
      <BiSearch className="text-white" />
    </div>
  );
};

export default Input;
