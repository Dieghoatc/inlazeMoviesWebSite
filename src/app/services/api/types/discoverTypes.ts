import { Movie } from "./movieTypes";

export interface DiscoverMovieResponse {
  page: number;
  results: Movie[];
}
