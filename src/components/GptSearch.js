import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="text-xs md:text-lg">
      <div className="fixed -z-10 w-full ">
        <img src={BG_URL} alt="logo" className="h-screen w-full object-cover" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />;
    </div>
  );
};

export default GptSearch;
