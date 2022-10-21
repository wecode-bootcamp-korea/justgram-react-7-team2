import React from "react";
import "./Main.scss";

const Comment = (props, { plusComment }) => {
  const { user, content } = props;
  return (
    <li className="commentBox">
      <b className="writer">{user}</b>
      <span className="plusComment">
        {content}
        {plusComment}
      </span>
    </li>
  );
};

export default Comment;
