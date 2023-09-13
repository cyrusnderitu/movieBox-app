import React from "react";
import MovieContextProvider from "../context/MovieContext";

const Layout = ({ children }) => {
  return (
    <MovieContextProvider>
      <div>{children}</div>
    </MovieContextProvider>
  );
};

export default Layout;
