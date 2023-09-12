import React from "react";
import Hero from "../components/Hero.";
import Featured from "../components/Featured/Featured";
import Latest from "../components/Latest/Latest";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Latest />
    </div>
  );
};

export default Home;
