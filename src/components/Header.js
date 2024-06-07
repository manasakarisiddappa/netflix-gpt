import React, { useEffect, useState } from "react";
import { USER_AVATAR, LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userName = user?.displayName;

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);

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
      <img className="w-28 mx-3 py-2 md:w-52 md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div>
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
