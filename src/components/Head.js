import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SUGGESTION_API } from "../utils/constants";
import { Link } from "react-router-dom";


const Head = () => {
  const userName = useSelector((store) => store.auth.userName);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const menuHandler = () => {
    dispatch(toggleMenu());
  };

  // Suggestion API
  const suggestionAPI = async (searchText) => {
    console.log("Search Text - ", searchText);
    const data = await fetch(SUGGESTION_API + searchText);
    const json = await data.json();
    setSuggestion(json[1]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => suggestionAPI(searchQuery), 300);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <div className="fixed grid grid-flow-col p-5 h-20 bg-white w-[90rem] shadow-md">
      <div className="flex">
        <img
          onClick={() => menuHandler()}
          className="h-8 bg-red-50 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
        />
        <Link to={"/"}>
          <img
            className="h-8 w-50 bg-blue-100 mx-2"
            alt="youtube logo"
            src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
          />
        </Link>
      </div>
      <div className="col-span-10 h-7 px-5 ">
        <input
          className="w-1/2 border border-grey-400  p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={() => setShowSuggestion(false)}
          onFocus={() => setShowSuggestion(true)}
        ></input>
        <button className="p-2 bg-blue-100 border border-grey-400 rounded-r-full">
          Search
          {/* <img className="h-8" src="https://thumbs.dreamstime.com/b/magnifier-icon-164356460.jpg"/> */}
        </button>
        {showSuggestion && suggestion?.length > 0 && (
          <div className="fixed bg-white rounded-md w-[27rem] pl-3 border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className=" p-2 hover:bg-gray-100 ">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-left">
        <Link to={"/login"}>
          <img
            className="h-8"
            alt="user profile"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          ></img>
        </Link>
        { userName && 
      <h1 className="ml-5">Hello {userName} !!!</h1>}
      </div>
      
    </div>
  );
};

export default Head;
