import React from "react";

import "./Main.scss";

import Feed from "./Feed";
const Main = () => {
  return (
    <>
      <header>
        <div className="header-column">
          <span>
            <img className="instagram-img" src="./image/instagram.png" />
          </span>
          <span className="slash">|</span>
          <span className="logo">Justgram</span>
        </div>
        <div className="header-column">
          <input className="search-bar" type="text" placeholder="검색" />
        </div>
        <div className="header-column">
          <span className="circle">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
          </span>
          <span className="head-heart">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
          </span>
          <span className="dot">.</span>
          <span className="person1">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
          </span>
        </div>
      </header>
      <Feed></Feed>
    </>
  );
};
export default Main;
