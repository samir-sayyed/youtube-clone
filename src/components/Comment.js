import React from "react";
import { formatViewCount } from "../utils/applicationUtils";

const Comment = ({ commentData }) => {
  const { snippet } = commentData;
  const {
    authorDisplayName,
    authorProfileImageUrl,
    textDisplay,
    likeCount,
    updatedAt,
  } = snippet?.topLevelComment?.snippet;


  return (
    <div className="flex items-start my-2">
      <img
        className="h-7 p-0 mx-3 rounded-full"
        alt=""
        src={authorProfileImageUrl}
      />
      <div className="flex flex-col items-start">
        <h1 className="font-semibold">{authorDisplayName}</h1>
        <h1 className="text-sm">{textDisplay}</h1>
        <div className="flex px-2 py-1 items-center">
          <img
            className="h-4 "
            src="https://cdn-icons-png.flaticon.com/512/1175/1175578.png"
          />
          <h1 className="mx-1 text-sm">{formatViewCount(likeCount)}</h1>
          <img
            className="h-4 ml-2"
            src="https://cdn-icons-png.flaticon.com/512/126/126504.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
