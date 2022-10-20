import React from "react";
import "./Main.scss";

const Comment = ({ plusComment }) => {
  return (
    <li className="commentBox">
      <b className="writer">hi_teddyBear</b>
      <span className="plusComment">{plusComment}</span>
    </li>
  );
};

export default Comment;
