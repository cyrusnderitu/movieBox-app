import React, { createContext } from "react";
import useDataFetcher from "../hooks/useDataFetcher";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const { data, isLoading } = useDataFetcher();
  return (
    <MovieContext.Provider value={{ isLoading, data }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
