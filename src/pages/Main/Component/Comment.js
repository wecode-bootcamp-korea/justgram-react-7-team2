import React, { useState, Fragment } from "react";
import "./Comment.scss";

function Comment(props) {
  return (
    <Fragment>
      <p className="commentP">
        <span className="writer">dawon_Oh</span>
        <span className="tag">@friend_1</span>
        <span className="content">{props.content}</span>
      </p>
    </Fragment>
  );
}

export default Comment;
