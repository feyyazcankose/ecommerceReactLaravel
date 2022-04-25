import React from "react";
import SingleComment from "./SingleComment";

const Comment = () => {
  return (
    <div class="single-block">
      <div class="reviews">
        <h4 class="title">Latest Reviews</h4>
        <SingleComment/>
        <SingleComment/>
      </div>
    </div>
  );
};

export default Comment;
