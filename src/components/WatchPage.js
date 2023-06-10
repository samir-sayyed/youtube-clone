import CommentsContainer from "./CommentsContainer";
import SimilarVideosContainer from "./SimilarVideosContainer";
import Video from "./Video";
import VideoSideContainer from "./VideoSideContainer";

const WatchPage = () => {
  return (
    <div className="flex mt-[70px]">
      <div className="flex flex-col">
        <Video />
        <CommentsContainer />
      </div>
      <VideoSideContainer />
    </div>
  );
};

export default WatchPage;
