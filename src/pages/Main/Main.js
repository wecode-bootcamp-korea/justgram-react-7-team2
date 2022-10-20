import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();
  const [commentArray, setCommentArray] = useState([]);
  const [id, setId] = useState(1);
  const value = useRef();
  const [text, setText] = useState("");

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

  const goLogin = () => {
    navigate("/");
  };

  return (
    <div className="wrap">
      <header>
        <nav>
          <div className="logo">
            <p className="ins-logo"></p>
          </div>
          <div className="search">
            <input
              id="searchInput"
              type="search"
              className="input-search"
              placeholder="검색"
            />
          </div>
          <div className="menubar">
            <div className="menu">
              <p className="home" href="/login.html"></p>
              <p className="dm" href="#"></p>
              <p className="plus" href="#"></p>
              <p className="explore" href="#"></p>
              <p className="heart" href="#"></p>
              <p className="user" href="#!">
                <i className="profile"></i>
              </p>
            </div>
          </div>
        </nav>
      </header>
      <section>
        <div className="main-box">
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
                      <li className="commentBox" key={comment.id}>
                        <b className="writer">hi_teddyBear</b>
                        <span className="plusComment">
                          {comment.plusComment}
                        </span>
                      </li>
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

          <div className="follow">
            <div className="account">
              <p className="my-img"></p>
              <p className="my-name">
                hi_teddyBear
                <span>안녕! 내이름은 곰도리, 만나서 반가워 🐻</span>
              </p>
              <p className="my-change" onClick={goLogin}>
                전환
              </p>
            </div>
            <div className="rec">
              <b>회원님을 위한 추천</b>
              <div className="follower">
                <p className="f-img-1"></p>
                <b>hank_says_hank</b>
                <span className="follow-btn">팔로우</span>
              </div>
              <div className="follower">
                <p className="f-img-2"></p>
                <b>dori_ddori</b>
                <span className="follow-btn">팔로우</span>
              </div>
              <div className="follower">
                <p className="f-img-3"></p>
                <b>leoCutie</b>
                <span className="follow-btn">팔로우</span>
              </div>
              <div className="follower">
                <p className="f-img-4"></p>
                <b>hello_e</b>
                <span className="follow-btn">팔로우</span>
              </div>
              <div className="follower">
                <p className="f-img-5"></p>
                <b>have_a_nice_day</b>
                <span className="follow-btn">팔로우</span>
              </div>
            </div>
            <div className="ft-menu">
              <p>소개﹒</p>
              <p>도움말﹒</p>
              <p>홍보센터﹒</p>
              <p>API﹒</p>
              <p>채용 정보﹒</p>
              <p>개인정보처리방침﹒</p>
              <p>약관﹒</p>
              <p>위치﹒</p>
              <p>언어</p>
              <div className="copy">
                <p>© 2022 Instagram from Meta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
