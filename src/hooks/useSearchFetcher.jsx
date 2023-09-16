import { useState, useEffect } from "react";

const useSearchFetcher = (title) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=692a2e9f65639e9f0203cfb13947ad8b&query="${title}"`
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [title]);
  return { isLoading, data };
};

export default useSearchFetcher;
