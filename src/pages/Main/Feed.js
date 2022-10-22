import React, { useState, useEffect } from "react";
import "./Feed.scss";
import Comment from "./Comment";
function Feed({ likeCount, userName, content, feedImage }) {
    const [commentArray, setCommentArray] = useState([]);

    useEffect(() => {
        fetch("/data/CommentData.json")
            .then((res) => res.json())
            .then((res) => setCommentArray(res.data));
    }, []);
    return (
        <div>
            <div className="main main1">
                <div className="main-header">
                    <div className="box">
                        <p className="radius"></p>
                        <p className="personId">{userName}</p>
                    </div>
                    <div className="dots">
                        <img width="20px" src="image/option.png" alt="dots" />
                    </div>
                </div>
                <div className="picture">
                    <img src={feedImage} alt="피드이미지" />
                </div>
                <div className="mainIcon">
                    <div>
                        <img
                            width="20px"
                            height="20px"
                            src="../../image/heart.png"
                            alt="heart"
                        />
                        <img
                            width="20px"
                            height="20px"
                            src="../../image/speech-bubble.png"
                            alt="speech"
                        />
                        <img
                            width="20px"
                            height="20px"
                            src="/image/option.png"
                            alt="download"
                        />
                    </div>
                    <div>
                        <img
                            width="20px"
                            height="20px"
                            src="/image/bookmark-white.png"
                            alt="mark"
                        />
                    </div>
                </div>
                <div className="like">
                    <div>좋아요{likeCount}개</div>
                </div>
                <div className="write">
                    {content}
                    <span className="small">58초전</span>
                </div>
                <div className="hidden">
                    {commentArray.map((comment) => {
                        return (
                            <Comment
                                key={comment.id}
                                content={comment.content}
                                writer={comment.name}
                            />
                        );
                    })}
                </div>
                <div className="comment">
                    <input
                        className="input"
                        type="text"
                        placeholder="댓글달기.."
                    />
                    <button className="btn">게시</button>
                </div>
            </div>
        </div>
    );
}

export default Feed;
