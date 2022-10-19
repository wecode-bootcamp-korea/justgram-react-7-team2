import { Fragment } from "react";
import "./Main.scss";

function Main() {
  return (
    <Fragment>
      <header>
        <div id="headerMain">
          <div id="headerLeft">
            <div id="icon">
              <img
                src={process.env.PUBLIC_URL + `/images/instagram.png`}
                alt="justgram 로고"
              />
            </div>
            <span id="pipe">|</span>
            <span id="logoName">justgram</span>
          </div>
          <div id="headerSearch">
            <input type="text" placeholder="검색" id="searchInput" />
          </div>
          <div id="headerRight">
            <div id="explore" className="logos"></div>
            <div id="heart" className="logos"></div>
            <div id="profile" className="logos"></div>
          </div>
        </div>
      </header>
      <main className="alignCenter">
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
            <p className="commentP grayFont">댓글 2개 모두 보기</p>
            <div className="commentList">
              <p className="commentP">
                <span className="writer">dawon_Oh</span>
                <span className="tag">@friend_1</span>
                <span className="content">날씨가 좋네요 요즘!</span>
              </p>
            </div>
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
                />
              </div>
            </div>
            <button className="addBtn">게시</button>
          </div>
        </div>
        <div className="feed">
          <div className="feedHeader">
            <div className="profileDiv alignCenter">
              <div className="user alignCenter">
                <img
                  src={process.env.PUBLIC_URL + `/images/cookie.jpg`}
                  alt="프로필이미지"
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
              src={process.env.PUBLIC_URL + `/images/cafe.jpg`}
              alt="카페이미지"
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
            <p className="countLikes commentP">좋아요 10개</p>
            <p className="commentP">
              <span className="writer">dawon_Oh</span>
              <span className="content">차가 맛있었던 카페</span>
            </p>
            <p className="commentP grayFont">댓글 3개 모두 보기</p>
            <div className="commentList">
              <p className="commentP">
                <span className="writer">dawon_Oh</span>
                <span className="tag">@friend_2</span>
                <span className="content">ㅋㅋㅋㅋㅋㅋㅋ🤣</span>
              </p>
            </div>
            <div className="writeDate grayFont">3일 전</div>
          </div>
          <div className="addComment alignCenter">
            <div className="addCommentLogoAndInput alignCenter">
              <div className="smileIcon">
                <img
                  src={process.env.PUBLIC_URL + `/images/emoticon.png`}
                  alt="댓글창로고"
                  className="smile"
                />
              </div>
              <div className="inputForm">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="commentInput"
                />
              </div>
            </div>
            <button className="addBtn">게시</button>
          </div>
        </div>
        <div className="feed">
          <div className="feedHeader">
            <div className="profileDiv alignCenter">
              <div className="user alignCenter">
                <img
                  src={process.env.PUBLIC_URL + `/images/cookie.jpg`}
                  alt="프로필이미지"
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
              src={process.env.PUBLIC_URL + `/images/cat.jpg`}
              alt="고양이이미지"
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
            <p className="countLikes commentP">좋아요 12개</p>
            <p className="commentP">
              <span className="writer">dawon_Oh</span>
              <span className="content">😺</span>
            </p>
            <p className="commentP grayFont">댓글 4개 모두 보기</p>
            <div className="commentList">
              <p className="commentP">
                <span className="writer">dawon_Oh</span>
                <span className="tag">@friend_3</span>
                <span className="content">😺😺😺</span>
              </p>
            </div>
            <div className="writeDate grayFont">4일 전</div>
          </div>
          <div className="addComment alignCenter">
            <div className="addCommentLogoAndInput alignCenter">
              <div className="smileIcon">
                <img
                  src={process.env.PUBLIC_URL + `/images/emoticon.png`}
                  alt="댓글창로고"
                  className="smile"
                />
              </div>
              <div className="inputForm">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="commentInput"
                />
              </div>
            </div>
            <button className="addBtn">게시</button>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
