import { MovieList } from "./MovieList";

export function Movies() {
  return (
    <div>
      <MovieList movieList="popular" page="1" />
      <MovieList movieList="now_playing" page="1" />
      <MovieList movieList="upcoming" page="1" />
      <MovieList movieList="top_rated" page="1" />
    </div>
  );
}
