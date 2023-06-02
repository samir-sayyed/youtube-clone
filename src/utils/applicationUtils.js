import moment from "moment";

export const getTimeAgo = (dateString) => {
  const publishedDate = moment(dateString);
  const currentDate = moment();

  const hoursAgo = currentDate.diff(publishedDate, "hours");
  if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  }

  const daysAgo = currentDate.diff(publishedDate, "days");
  if (daysAgo === 1) {
    return "Yesterday";
  }

  const yearsAgo = currentDate.diff(publishedDate, "years");
  if (yearsAgo >= 1) {
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  }

  return `${daysAgo} days ago`;
};

export const formatViewCount = (viewCount) => {
  if (viewCount < 1000) {
    return viewCount.toString(); // Return the original count if less than 1000
  } else if (viewCount < 1000000) {
    return `${Math.floor(viewCount / 1000)}K`; // Convert to thousands
  } else {
    return `${(viewCount / 1000000).toFixed(1)}M`; // Convert to millions and keep 1 decimal place
  }
};
