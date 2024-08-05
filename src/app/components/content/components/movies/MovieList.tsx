"use client";

import { Card } from "./components/Card";
import styles from "./movieList.module.css";
import { useFetchMovieList } from "@/app/services/api/useFetchMoviesList";

interface NamesTypes {
  [key: string]: string;
}

const Names: NamesTypes = {
  popular: "Popular",
  now_playing: "Now playing",
  upcoming: "Upcoming",
  top_rated: "Top Rated",
};

interface PopularMoviesProps {
  movieList: string;
  page: string;
}

export function MovieList({ movieList, page }: PopularMoviesProps) {
  const { loading, data, error } = useFetchMovieList(movieList, page);

  if (loading) return <p>Cargando!!!</p>;
  if (!data) return <p>Cargando</p>;
  const { results } = data;

  return (
    <div className={styles.movies_wrapper}>
      <p className={styles.title}>{Names[movieList]}</p>
      <div className={styles.movies_list}>
        {results.map((movies) => {
          return (
            <div key={movies.id} className={styles.movie_card}>
              <Card movies={movies} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
