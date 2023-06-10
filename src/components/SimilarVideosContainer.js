import React from "react";
import SimilarVideo from "./SimilarVideo";
import axios from "axios";
import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_LINK, API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";

const SimilarVideosContainer = () => {
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
    <div>
      <h1 className="font-semibold text-xl">Similar Videos</h1>
      {videoList?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <SimilarVideo videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default SimilarVideosContainer;
