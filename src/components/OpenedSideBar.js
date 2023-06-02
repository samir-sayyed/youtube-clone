import React from "react";
import { Link } from "react-router-dom";

const OpenedSideBar = () => {
  return (
    <div className="flex px-6 mx-4 py-4 shadow-md flex-col">
      <Link to="/">
        <div className="flex flex-col my-5 items-center">
          <img
            className="h-8"
            alt="alt"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          />
          <h1>Home</h1>
        </div>
      </Link>

      <div className="flex flex-col my-5 items-center">
        <img
          className="h-8"
          alt="alt"
          src="https://logowik.com/content/uploads/images/youtube-shorts5863.jpg"
        />
        <h1>Shorts</h1>
      </div>

      <div className="flex flex-col my-5 items-center">
        <img
          className="h-8"
          alt="alt"
          src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
        />
        <h1>Subscriptions</h1>
      </div>

      <div className="flex flex-col my-5 items-center">
        <img
          className="h-8"
          alt="alt"
          src="https://static.thenounproject.com/png/2481186-200.png"
        />
        <h1>Library</h1>
      </div>
    </div>
  );
};

export default OpenedSideBar;
