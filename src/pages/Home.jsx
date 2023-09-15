import React from "react";
import Hero from "../components/Hero.";
import Featured from "../components/Featured/Featured";
import Latest from "../components/Latest/Latest";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Latest />
      <Footer />
    </div>
  );
};

export default Home;
