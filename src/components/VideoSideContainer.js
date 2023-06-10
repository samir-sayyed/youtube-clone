import React from "react";
import SimilarVideosContainer from "./SimilarVideosContainer";
import LiveChatContainer from "./LiveChatContainer";

const VideoSideContainer = () => {
  return (
    <div className="flex flex-col">
      <LiveChatContainer />
      <SimilarVideosContainer />
    </div>
  );
};

export default VideoSideContainer;
