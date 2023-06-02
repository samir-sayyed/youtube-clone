import React from "react";
import OpenedSideBar from "./OpenedSideBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return isMenuOpen ? (
    <OpenedSideBar />
  ) : (
    <div className="w-[200px] m-4 px-4 shadow-md">
      <div>
        <Link to="/">
          <div className="flex items-center py-2 ">
            <img
              className="h-5"
              alt="home-icon"
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            />
            <h1 className="mx-5">Home</h1>
          </div>
        </Link>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://logowik.com/content/uploads/images/youtube-shorts5863.jpg"
          />
          <h1 className="mx-5">Shorts</h1>
        </div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
          />
          <h1 className="mx-5">Subscriptions</h1>
        </div>
      </div>

      <div className="my-3 border border-gray-200"></div>

      <div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://static.thenounproject.com/png/2481186-200.png"
          />
          <h1 className="mx-5">Library</h1>
        </div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://static.thenounproject.com/png/1563151-200.png"
          />
          <h1 className="mx-5">History</h1>
        </div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://www.shutterstock.com/image-illustration/alarm-later-icon-element-web-260nw-1172002462.jpg"
          />
          <h1 className="mx-5">Watch Later</h1>
        </div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY6o6v9BTQ61meDqB03Y9degYyCt970sc3cEM60xPeiBuW3cKmyLmdgn8YHrYNPlRW4s&usqp=CAU"
          />
          <h1 className="mx-5">Liked Videos</h1>
        </div>
      </div>

      <div className="my-3 border border-gray-200"></div>

      <div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          />
          <h1 className="mx-5">Library</h1>
        </div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://static.thenounproject.com/png/1563151-200.png"
          />
          <h1 className="mx-5">History</h1>
        </div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://www.shutterstock.com/image-illustration/alarm-later-icon-element-web-260nw-1172002462.jpg"
          />
          <h1 className="mx-5">Watch Later</h1>
        </div>
        <div className="flex items-center py-2 ">
          <img
            className="h-5"
            alt="home-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY6o6v9BTQ61meDqB03Y9degYyCt970sc3cEM60xPeiBuW3cKmyLmdgn8YHrYNPlRW4s&usqp=CAU"
          />
          <h1 className="mx-5">Liked Videos</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
