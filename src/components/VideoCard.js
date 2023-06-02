import { formatViewCount, getTimeAgo } from "../utils/applicationUtils";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 shadow-lg rounded-lg w-[240px] cursor-pointer">
      <img
        className="w-[230px] rounded-lg"
        alt="thumbnail"
        src={thumbnails.standard.url}
      />
      <h1 className="card-title line-clamp-2 font-semibold text-md my-1">
        {title}
      </h1>
      <h1 className="card-channel-title truncate text-sm ">{channelTitle}</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-sm">
          {formatViewCount(statistics.viewCount)} views{" "}
        </h1>
        <h1 className="text-sm ">{getTimeAgo(snippet.publishedAt)}</h1>
      </div>
    </div>
  );
};

export default VideoCard;
