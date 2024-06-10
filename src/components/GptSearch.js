import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="logo"
          className="h-screen w-screen object-cover"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />;
    </div>
  );
};

export default GptSearch;
