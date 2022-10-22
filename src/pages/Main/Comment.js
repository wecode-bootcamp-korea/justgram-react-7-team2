import React from "react";
function commentArray({ content, writer }) {
    return (
        <p className="commentP">
            <span className="writer">{writer}</span>
            <span className="writer_text">{content}</span>
        </p>
    );
}
export default commentArray;
