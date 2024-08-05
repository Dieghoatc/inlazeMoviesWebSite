import { MoviesListLypes } from "@/app/services/api/types/moviesListTypes";
import { useNowPlaying } from "@/app/services/api/useFetchNowPlaying";
import { useFetchPopular } from "@/app/services/api/useFetchPopular";

type ReturnHook = {
  loading: boolean;
  error: string;
  data: MoviesListLypes[];
};

interface FetchList {
  [key: string]: (movieList: string, page: string) => ReturnHook;
}

export function useFetchSelected(movieList: string, page: string) {
  const fetchList: any = {
    popular: useFetchPopular(movieList, page),
    nowPlaying: useNowPlaying(movieList, page),
  };

  const useFetchFunction = fetchList[movieList];

  return { useFetchFunction };
}
