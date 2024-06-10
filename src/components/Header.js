import React, { useEffect, useState } from "react";
import { USER_AVATAR, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSLice";

const Header = () => {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const selectLang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const userName = user?.displayName;

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="w-full px-8 py-2 bg-gradient-to-b from-black  flex flex-col md:flex-row justify-between absolute z-20">
      <img
        className="w-28 mx-auto py-2 md:w-52 md:mx-0"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex p-2 items-center justify-center">
          {showGptSearch && (
            <select
              className="p-2 mx-0 h-9 my-2 bg-gray-900 text-white m-2 hover:cursor-pointer hover:bg-slate-500 rounded-lg inline-block"
              onChange={handleLanguageChange}
              value={selectLang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-gray-700 px-2  md:px-4 mx-2 md:mx-3 md:my-2 mt-3 h-9 md:h-9 text-white  hover:bg-slate-500 text-sm font-semibold rounded-md md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-7 md:w-9  mt-3 md:mt-2 h-7 md:h-9 cursor-pointer rounded-md"
            alt="usericon"
            src={USER_AVATAR}
            onClick={toggleDropDown}
          />
          {isDropDownOpen && (
            <div className="absolute bg-gray-800 text-gray-300  mt-11 md:mt-12 w-30 md:w-40 hover:cursor-pointer  right-10 md:right-10 p-2 rounded-lg shadow-lg ">
              <ul className="list-none p-0">
                <li className="text-sm py-1 md:py-2 px-2 md:px-2 border-b border-gray-600">
                  Hello {userName}
                </li>
                <li className="text-sm py-1 md:py-2 px-2 border-b border-gray-600">
                  <button
                    onClick={handleSignOut}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
