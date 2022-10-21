import React, { useState, useRef, useEffect } from "react";
import Comment from "./Comment";
import "./Main.scss";

const Feed = ({ feedData }) => {
  const { username, feedImage, content, userImage } = feedData;

  const [id, setId] = useState(1);
  const [text, setText] = useState("");
  const value = useRef();
  const [commentArray, setCommentArray] = useState([]);

  const addComment = (event) => {
    setId(id + 1);
    const newComment = {
      id: id,
      plusComment: value.current.value,
      createdAt: new Date().toLocaleString(),
    };
    setCommentArray([...commentArray, newComment]);
  };

  const commentInput = (event) => {
    setText(event.target.value);
  };

  const onClick = () => {
    addComment();
    setText("");
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      addComment();
      setText("");
    }
  };

  useEffect(() => {
    fetch("/data/comments.json")
      .then((res) => res.json())
      .then((data) => setCommentArray(data.comments));
  }, []);

  return (
    <>
      <div className="feedContent">
        <div className="feed-head">
          <div className="feed-nav">
            <p className="nav-img">
              <img src={userImage} alt="" />
            </p>
          </div>
          <p className="my-name">{username}</p>
          <p className="more-img"> </p>
        </div>

        <div className="feed-img">
          <img src={feedImage} alt="" />
        </div>
        <div className="like">
          <div className="like-box">
            <div className="like-left-icon">
              <i className="heart"></i>
              <i className="chat"></i>
              <i className="dm"></i>
            </div>
            <div className="like-right-icon">
              <i className="keep"></i>
            </div>
          </div>
          <div className="like-people">
            <p className="people-img"></p>
            <span>
              <b>hi_teddyBear</b>님 <b>여러 명</b>이 좋아합니다
            </span>
          </div>
        </div>
        <div className="message">
          <div className="m-text">
            <b>{username}</b>
            <span>{content}</span>
          </div>
          <ul className="m-box">
            {commentArray.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  user={comment.user || "hi_teddyBear"}
                  content={comment.content || comment.plusComment}
                />
              );
            })}
          </ul>
          <p className="m-time">3시간 전</p>
        </div>
        <div className="comment">
          <p className="emoji">🥰</p>
          <input
            type="text"
            className="comment-box"
            placeholder="댓글달기..."
            ref={value}
            onKeyPress={onKeyPress}
            onChange={commentInput}
            value={text}
          />
          <button className="comment-btn" onClick={onClick}>
            게시
          </button>
        </div>
      </div>
    </>
  );
};
export default Feed;
