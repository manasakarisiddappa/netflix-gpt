import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    data = await data.json();
    const filterTrailer = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMovieTrailer;
