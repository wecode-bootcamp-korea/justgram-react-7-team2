import { Fragment, useState, useRef, useEffect } from "react";
import "./Main.scss";
import Feed from "./Component/Feed";

function Main() {
  const [feeds, setFeeds] = useState([]);
  //public/data/feed.json 읽어오기
  useEffect(() => {
    fetch("/data/feed.json", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setFeeds(res.feeds);
      });
  }, []);
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
        {feeds.map((feed) => {
          return (
            <Feed
              key={feed.id}
              writer={feed.writer}
              profileImg={feed.profileImg}
              content={feed.content}
              img={feed.img}
              likesCount={feed.likesCount}
            />
          );
        })}
      </main>
    </Fragment>
  );
}

export default Main;
