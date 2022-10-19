import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faHeart,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function Feed() {
  const [id, setId] = useState("");
  const value = useRef();
  const [commentArray, setCommentArray] = useState([
    {
      id: 0,
      name: "subbny",
      content: "누가 찍었는지 잘 찍었다",
    },
  ]);
  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      name: "subbny",
      blank: "  ",
      content: value.current.value,
    };
    setCommentArray([...commentArray, newComment]);
  };

  return (
    <>
      <div className="feed-body">
        <div className="feed-header">
          <span className="profile">
            <img
              className="profile-img"
              src="/image/C2DA6EB1-C439-4CE6-8795-DE3AFE708C06-630-000000B1B2E8E8F1.JPG"
            />
            <span>subb_ny</span>
          </span>
          <span className="etc">
            <FontAwesomeIcon icon={faEllipsis} className="ellipsis" />
          </span>
        </div>
        <div className="feed-picture">
          <img src="/image/79F26257-C1CB-4416-BF12-8FDAEF282FD7.JPG" />
        </div>
        <div className="feed-menu">
          <span>
            <FontAwesomeIcon icon={faHeart} className="fa-heart" size="2x" />
            <FontAwesomeIcon
              icon={faComment}
              className="fa-comment"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              className="fa-arrow-up-from-bracket"
              size="2x"
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faBookmark}
              className="fa-bookmark"
              size="2x"
            />
          </span>
        </div>
        <div className="feed-comment">
          <div className="like">
            <img src="/image/1F3451CE-5EC1-459C-82C0-403BA49BE8D7-630-000000B60631D089.JPG" />
            <span>bbyounghyun</span>님 <span>외 1013명</span>이 좋아합니다.
          </div>
          <span className="my-comment">
            <span className="my-name">subb_ny</span>아아아아아아아즈벤야
            키오마아아아아...<span className="thebogi">더보기</span>
          </span>
          <div className="your-comment">
            <div>
              <span className="your-name">bbyounghyun</span>
              나나나나나나나나나나낫
            </div>
            <span>
              <FontAwesomeIcon icon={faHeart} className="fa-heart heart2 " />
            </span>
          </div>
          <div className="comment-write">
            {commentArray.map((comment) => {
              return (
                <li key={comment.id}>
                  {comment.name}
                  {comment.blank}
                  {comment.content}
                </li>
              );
            })}
          </div>
          <div className="time">42분전</div>
        </div>
        <div className="comment-bar">
          <input type="text" placeholder="댓글달기...." ref={value} />
          <button className="gaesi" onClick={addComment}>
            게시
          </button>
        </div>
      </div>
    </>
  );
}
