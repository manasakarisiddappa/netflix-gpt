import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-lg md:text-3xl py-4">{title}</h1>

      <div className="flex overflow-x-scroll hide-scrollbar overflow-y-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              poster_path={movie?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
