import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState(null);
  const getVideos = async () => {
    try {
      const response = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyByNvaZB4l1rkz9DIk11hsWCfghioUFRUU"
      ); // Replace with your API endpoint
      setVideoList(response.data?.items);
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
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
