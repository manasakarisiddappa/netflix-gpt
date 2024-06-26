import React from "react";
import { MAX_TITLE, MAX_WORDS } from "../utils/constants";

const VideoTitle = ({ original_title, overview }) => {
  const truncatedDescription = overview
    .split(" ")
    .slice(0, MAX_WORDS)
    .join(" ");

  return (
    <div className="w-full aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold w-3/4 md:w-1/2">
        {original_title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">
        {truncatedDescription}
      </p>
      <div className=" my-4 md:m-0">
        <button className=" hidden md:inline-block bg-white  text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          <span>▶️</span>Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
