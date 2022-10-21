import React, { Fragment, useEffect, useRef, useState } from "react";
import Comment from "./Comment";
import "./Feed.scss";

function Feed() {
  //댓글 목록 관리
  const [commentArray, setCommentArray] = useState([]);

  //public/data/comment.json 읽어오기
  useEffect(() => {
    fetch("/data/comment.json", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setCommentArray(res.comment);
      });
  }, []);

  //각 댓글에는 고유한 key값이 있어야 한다.
  // const [id, setId] = useState(1);
  // const value = useRef();

  //댓글 추가 함수
  // const addComment = () => {
  //   setId(id + 1);
  //   const newComment = {
  //     id: id,
  //     content: value.current.value,
  //   };

  //   setCommentArray([...commentArray, newComment]);
  // };
  return (
    <Fragment>
      <div className="feed">
        <div className="feedHeader">
          <div className="profileDiv alignCenter">
            <div className="user alignCenter">
              <img
                src={process.env.PUBLIC_URL + `/images/cookie.jpg`}
                alt="프로필사진"
                className="profileImg"
              />
              <span className="userName">dawon_Oh</span>
            </div>
            <div className="feedHeaderMenu">
              <img
                src={process.env.PUBLIC_URL + `/images/option.png`}
                alt="피드메뉴"
                className="feedHeaderMenuImg"
              />
            </div>
          </div>
        </div>
        <div className="feedImgDiv alignCenter">
          <img
            src={process.env.PUBLIC_URL + `/images/sky.jpg`}
            alt="하늘이미지"
            className="feedImg"
          />
        </div>
        <div className="feedMenu">
          <div id="feedLeft" className="alignCenter">
            <div id="feedHeart">
              <img
                src={process.env.PUBLIC_URL + `/images/heart.png`}
                alt="좋아요"
                className="feedIcon"
              />
            </div>
            <div id="feedComment">
              <img
                src={process.env.PUBLIC_URL + `/images/speech-bubble.png`}
                alt="댓글보기"
                className="feedIcon"
              />
            </div>
            <div id="feedSend">
              <img
                src={process.env.PUBLIC_URL + `/images/send.png`}
                alt="공유하기"
                className="feedIcon"
              />
            </div>
          </div>
          <div id="feedRight" className="alignCenter">
            <div id="feedMark">
              <img
                src={process.env.PUBLIC_URL + `/images/bookmark-white.png`}
                alt="저장하기"
                className="feedIcon"
              />
            </div>
          </div>
        </div>
        <div className="comment">
          <p className="countLikes commentP">좋아요 4개</p>
          <p className="commentP">
            <span className="writer">dawon_Oh</span>
            <span className="content">날씨 좋다🌞</span>
          </p>
          {commentArray.map((comment) => {
            return (
              <Comment
                key={comment.id}
                writer={comment.writer}
                content={comment.content}
              />
            );
          })}
          <div className="writeDate grayFont">2일 전</div>
        </div>
        <div className="addComment alignCenter">
          <div className="addCommentLogoAndInput alignCenter">
            <div className="smileIcon">
              <img
                src={process.env.PUBLIC_URL + `/images/emoticon.png`}
                alt="댓글창 로고"
                className="smile"
              />
            </div>
            <div className="inputForm">
              <input
                type="text"
                placeholder="댓글 달기..."
                className="commentInput"
                // ref={value}
              />
            </div>
          </div>
          <button className="addBtn">게시</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Feed;
