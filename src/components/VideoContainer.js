import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { API_KEY, YOUTUBE_VIDEO_LINK } from "../utils/constants";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState(null);
  const getVideos = () => {
    try {
      axios
        .get(YOUTUBE_VIDEO_LINK + API_KEY)
        .then((response) => {
          const data = response.data;
          setVideoList(data?.items);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      {videoList?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
