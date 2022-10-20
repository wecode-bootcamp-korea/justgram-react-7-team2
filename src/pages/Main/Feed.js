import React, { useState, useRef } from "react";
import Comment from "./Comment";
import "./Main.scss";

const Feed = () => {
  const [id, setId] = useState(1);
  const [text, setText] = useState("");
  const value = useRef();
  const [commentArray, setCommentArray] = useState([]);

  const addComment = (event) => {
    setId(id + 1);
    const newComment = {
      id: id,
      plusComment: value.current.value,
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

  return (
    <div className="feed">
      <div className="feed-content">
        <div className="feed-head">
          <div className="feed-nav">
            <p className="nav-img"></p>
          </div>
          <p className="my-name">hank_says_hank</p>
          <p className="more-img"></p>
        </div>

        <div className="feed-img image1"></div>
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
            <b>hank_says_hank</b>
            <span>
              복실복실 너무 귀엽다.. 아 귀여운데..? 진짜 너무 귀여운데..?
            </span>
          </div>
          <ul className="m-box">
            {commentArray.map((comment) => {
              return (
                <Comment plusComment={comment.plusComment} key={comment.id} />
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
      <div className="feed-content">
        <div className="feed-head">
          <div className="feed-nav">
            <p className="nav-img"></p>
          </div>
          <p className="my-name">hank_says_hank</p>
          <p className="more-img"></p>
        </div>

        <div className="feed-img image2"></div>
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
            <b>hank_says_hank</b>
            <span>티비 보는 중,,,📺</span>
          </div>
          <ul className="m-box"></ul>
          <p className="m-time">3시간 전</p>
        </div>
        <div className="comment">
          <p className="emoji">🥰</p>
          <input
            type="text"
            className="comment-box"
            placeholder="댓글달기..."
          />
          <button className="comment-btn">게시</button>
        </div>
      </div>
      <div className="feed-content">
        <div className="feed-head">
          <div className="feed-nav">
            <p className="nav-img"></p>
          </div>
          <p className="my-name">hank_says_hank</p>
          <p className="more-img"></p>
        </div>

        <div className="feed-img image3"></div>
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
            <b>hank_says_hank</b>
            <span>잔디 접수해따 !!!! 💨</span>
          </div>
          <ul className="m-box"></ul>
          <p className="m-time">3시간 전</p>
        </div>
        <div className="comment">
          <p className="emoji">🥰</p>
          <input
            type="text"
            className="comment-box"
            placeholder="댓글달기..."
          />
          <button className="comment-btn">게시</button>
        </div>
      </div>
      <div className="feed-content">
        <div className="feed-head">
          <div className="feed-nav">
            <p className="nav-img"></p>
          </div>
          <p className="my-name">hank_says_hank</p>
          <p className="more-img"></p>
        </div>

        <div className="feed-img image4"></div>
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
            <b>hank_says_hank</b>
            <span>잘 때도 왕 귀엽습니다. 🛌</span>
          </div>
          <ul className="m-box"></ul>
          <p className="m-time">3시간 전</p>
        </div>
        <div className="comment">
          <p className="emoji">🥰</p>
          <input
            type="text"
            className="comment-box"
            placeholder="댓글달기..."
          />
          <button className="comment-btn">게시</button>
        </div>
      </div>
      <div className="feed-content">
        <div className="feed-head">
          <div className="feed-nav">
            <p className="nav-img"></p>
          </div>
          <p className="my-name">hank_says_hank</p>
          <p className="more-img"></p>
        </div>

        <div className="feed-img image5"></div>
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
            <b>hank_says_hank</b>
            <span>메롱 〰️ 😜</span>
          </div>
          <ul className="m-box"></ul>
          <p className="m-time">3시간 전</p>
        </div>
        <div className="comment">
          <p className="emoji">🥰</p>
          <input
            type="text"
            className="comment-box"
            placeholder="댓글달기..."
          />
          <button className="comment-btn">게시</button>
        </div>
      </div>
    </div>
  );
};
export default Feed;
