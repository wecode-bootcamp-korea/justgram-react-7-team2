import { useNavigate } from "react-router-dom";
import Feed from "./Feed";
import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();

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
          <Feed />
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
