import React from "react";

const Comment = (props) => {
  const { id, name, content, tag } = props;

  return (
    <div className="newCommentProps">
      <span className="commentName">{name}</span>&nbsp;&nbsp;
      <span className="tag">{tag}&nbsp;</span>
      {content}
    </div>
  );
};

export default Comment;
