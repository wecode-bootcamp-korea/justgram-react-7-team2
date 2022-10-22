import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import "./Main.scss";

function Main() {
    const [feedArray, setFeedArray] = useState([]);

    useEffect(() => {
        fetch("/data/FeedData.json")
            .then((res) => res.json())
            .then((res) => setFeedArray(res.data));
    }, []);
    return (
        <div className="container2">
            <header>
                <div className="logo">
                    <img
                        width="20px"
                        height="20px"
                        src="./image/insta.png"
                        alt="insta"
                    />
                    <div className="bar"></div>
                    <div className="instaFont">
                        <Link to="/">instagram</Link>
                    </div>
                </div>
                <div className="search">
                    <img
                        width="10px"
                        height="10px"
                        src="./image/search.png"
                        alt="glass"
                    />
                    <input type="text" placeholder="검색" />
                </div>
                <div className="icon">
                    <img
                        width="20px"
                        height="20px"
                        src="./image/search.png"
                        alt="explorer"
                    />
                    <img
                        width="20px"
                        height="20px"
                        src="./image/heart.png"
                        alt="heart"
                    />
                    <img
                        width="20px"
                        height="20px"
                        src="/image/emoticon.png"
                        alt="my"
                    />
                </div>
            </header>
            <main className="container3">
                {feedArray.map((feed) => (
                    <Feed
                        key={feed.id}
                        likeCount={feed.likeCount}
                        userName={feed.userName}
                        content={feed.content}
                        feedImage={feed.feedImage}
                    />
                ))}
            </main>
        </div>
    );
}
export default Main;
