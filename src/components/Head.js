import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useState } from "react";
import { YOUTUBE_AUTO_SEARCH_API } from "../utils/constants";
import axios from "axios";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchKeywords = () => {
    axios
      .get(YOUTUBE_AUTO_SEARCH_API + searchQuery)
      .then((response) => {
        const data = response.data;
        setSuggestions(data[1]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => searchKeywords(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="min-w-full bg-white flex justify-between items-center px-4 shadow-md fixed">
      <div className="flex items-center">
        <img
          onClick={() => {
            handleMenuToggle();
          }}
          className="h-3 cursor-pointer"
          alt="menu"
          src="https://openclipart.org/image/2000px/221605"
        />

        <img
          className="mx-2 w-[110px]"
          alt="app-logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8 w-[500px] border border-gray-300 rounded-l-full px-4"
          />
          <button className="text-md' h-8 rounded-r-full border border-gray-300 bg-gray-50">
            <img
              className="h-5 mx-4"
              alt="search-pic"
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
            />
          </button>
          <img
            className="h-4 mx-4"
            alt="mic-pic"
            src="https://icons.veryicon.com/png/o/miscellaneous/the-font-is-great/microphone-89.png"
          />
        </div>
        <div className="fixed bg-white w-[500px] rounded-lg shadow-lg  my-8 max-h-[400px] overflow-y-auto">
          <ul>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="py-1 flex items-center hover:bg-gray-100 px-4"
              >
                <img
                  className="h-4 mr-4"
                  alt="profile-pic"
                  src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                />
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex">
        <img
          className="h-6 mx-6"
          alt="profile-pic"
          src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg"
        />
        <img
          className="h-6"
          alt="profile-pic"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        />
      </div>
    </div>
  );
};

export default Head;
