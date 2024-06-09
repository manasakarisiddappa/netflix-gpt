import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[20%] flex justify-center">
      <form className=" bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 rounded-lg bg-red-700 text-white">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;