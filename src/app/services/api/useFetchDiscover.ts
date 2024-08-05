import { useEffect, useState } from "react";
import { DiscoverMovieResponse } from "./types/discoverTypes";
import { options } from "../config";

export function useFetchDiscover(page: string) {
  const [data, setData] = useState<DiscoverMovieResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchApi(page: string) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    )
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
