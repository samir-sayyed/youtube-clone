import React from "react";
import Comment from "./Comment";

const CommentList = ({ commentList }) => {
  return (
    <div>
      {commentList?.map((comment, index) => (
        <Comment key={index} commentData={comment} />
      ))}
    </div>
  );
};

export default CommentList;
