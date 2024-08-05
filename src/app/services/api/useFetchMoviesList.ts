import { useEffect, useState } from "react";
import { options } from "../config";
import { MoviesListLypes } from "./types/moviesListTypes";

export function useFetchMovieList(movieList: string, page: string) {
  const [data, setData] = useState<MoviesListLypes>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchApi(page: string) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieList}?language=en-US&page=${page}`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .finally(() => setLoading(false))
      .catch((err) => setError(err));

    return response;
  }

  useEffect(() => {
    setLoading(true);
    fetchApi(page);
  }, []);

  return { data, loading, error };
}
