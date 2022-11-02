import React, { useState, useEffect } from "react";

const LikeButton = ({ numLikes }) => {
  const [likes, setLikes] = useState(numLikes);

  const handleClick = () => {
    setLikes(likes + 1);
  };
  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        {likes} Likes
      </button>
    </>
  );
};

export default LikeButton;
