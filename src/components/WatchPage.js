import CommentsContainer from "./CommentsContainer";
import SimilarVideosContainer from "./SimilarVideosContainer";
import Video from "./Video";

const WatchPage = () => {
  return (
    <div className="flex mt-[70px]">
      <div className="flex flex-col">
        <Video />
        <CommentsContainer />
      </div>
      <SimilarVideosContainer />
    </div>
  );
};

export default WatchPage;
