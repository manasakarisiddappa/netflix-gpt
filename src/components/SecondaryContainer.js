import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 z-20 relative">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Popular Movies" movies={popularMovies} />
        <MovieList title="Horror" movies={movies} />
        <MovieList title="Popular" movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
