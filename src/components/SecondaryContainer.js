import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);

  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 z-20 relative">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Popular Movies" movies={popularMovies} />
        <MovieList title="Upcoming Movies" movies={upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
