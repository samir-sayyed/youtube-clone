import React from "react";
import Comment from "./Comment";
import { COMMENTS_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [commentList, setCommentList] = useState(null);
  const getComments = () => {
    try {
      axios
        .get(COMMENTS_API + videoId + "&maxResults=100")
        .then((response) => {
          const data = response.data;
          setCommentList(data?.items);
          console.log(commentList?.items);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="ml-4">
      <h1 className="text-xl font-bold mx-3 my-2">Comments</h1>
      <CommentList commentList={commentList} />
    </div>
  );
};

export default CommentsContainer;
