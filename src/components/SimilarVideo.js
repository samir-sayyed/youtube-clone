import React from "react";
import { formatViewCount, getTimeAgo } from "../utils/applicationUtils";

const SimilarVideo = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex  p-2 m-2 shadow-lg rounded-lg w-[360px] cursor-pointer items-center justify-between">
      <img
        className="w-[130px] rounded-lg"
        alt="thumbnail"
        src={thumbnails?.standard.url}
      />
      <div className="mx-2">
        <h1 className="card-title line-clamp-2 font-semibold text-sm my-1">
          {title}
        </h1>
        <h1 className="card-channel-title truncate text-[12px] font-semibold">
          {channelTitle}
        </h1>
        <div className="flex items-center justify-start">
          <h1 className="text-sm text-[12px] mr-1">
            {formatViewCount(statistics?.viewCount)} views{" "}
          </h1>
          <p>-</p>
          <h1 className="ml-1 text-sm text-[12px]">
            {getTimeAgo(snippet?.publishedAt)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SimilarVideo;
