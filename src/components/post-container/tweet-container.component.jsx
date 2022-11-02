import Comment from "../comments-container/comments-container";
import React, { useState, useEffect } from "react";
import moment from "moment/moment";

const TweetContainer = ({ post }) => {
  const [postInputField, setPostInputField] = useState("");
  const [commentsData, setCommentsData] = useState([]);

  const handleTextChange = (event) => {
    setPostInputField(event.target.value);
    //console.log(postInputField);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!postInputField) return;

    commentsData.push({
      id: commentsData.length,
      timestamp: moment().format("LTS"),
      commentText: postInputField,
      numLikes: 0,
    });
    setCommentsData(commentsData);
    setPostInputField("");
  };

  const { label } = post;
  //console.log(commentsData);
  return (
    <div className="tweet-container alert alert-primary">
      <h2>{label}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Enter Comment"
          value={postInputField}
          onChange={handleTextChange}
        />
        <span> </span>
        <button className="btn btn-secondary" type="submit">
          Post
        </button>
      </form>
      <div className="comment-container list-group">
        {commentsData.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default TweetContainer;
