import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleMenu, setWatchPage } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { API_KEY, YOUTUBE_VIDEO } from "../utils/constants";
import axios from "axios";
import { formatViewCount } from "../utils/applicationUtils";

const Video = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoInfo, setVideoInfo] = useState(null);

  const getVideo = () => {
    axios
      .get(YOUTUBE_VIDEO + videoId + "&key=" + API_KEY)
      .then((response) => {
        const data = response.data;
        setVideoInfo(data?.items[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    dispatch(handleMenu(false));
    dispatch(setWatchPage(true));
    getVideo();
    return () => {
      dispatch(setWatchPage(false));
    };
  }, [searchParams]);

  const { snippet, statistics } = videoInfo || {};
  const { channelTitle, title } = snippet || {};
  return (
    <div className="mx-8 my-4">
      <div className="w-[800px]">
        <iframe
          width="800"
          height="350"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold text-xl my-1">{title}</h1>
        <div className="flex justify-between mt-3 items-center">
          <div className="flex">
            <h1 className="bg-red-300 px-[10px] rounded-full content-center mr-1">
              {channelTitle != null ? channelTitle[0] : ""}
            </h1>

            <h1 className="font-semibold mr-2">{channelTitle}</h1>
            <button className="bg-black text-white rounded-full px-3 py-1 content-center">
              Subscribe
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex bg-gray-200 px-2 py-1 rounded-full">
              <img
                className="h-7 mx-3"
                src="https://cdn-icons-png.flaticon.com/512/1175/1175578.png"
              />
              <h1 className="mx-2">{formatViewCount(statistics?.likeCount)}</h1>
              <img
                className="h-7 mx-3"
                src="https://cdn-icons-png.flaticon.com/512/126/126504.png"
              />
            </div>
            <button className=" font-semibold rounded-full px-4 py-2 bg-gray-200 ml-4">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
