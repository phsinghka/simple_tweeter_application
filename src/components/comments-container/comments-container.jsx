import "./comments-container.styles.css";
import LikeButton from "../likebutton/likebutton.component";

const Comment = ({ comment }) => {
  const { timestamp, commentText, numLikes } = comment;
  return (
    <div className=" list-group-item">
      <div class="container">
        <div class="row">
          <div class="col">{timestamp}</div>
          <div class="col-6">
            <b>{commentText}</b>
          </div>
          <div class="col">
            <LikeButton numLikes={numLikes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
