import React from "react";
import "./style.css";

export const PostCard = ({ post }) => {
  return (
    <div className="card_wrapper">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
