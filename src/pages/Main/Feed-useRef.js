import React, { useState, useRef } from "react";
import Comment from "./Comment";
import "./Feed.scss";
function Feed() {
    // 댓글 개수 관리
    const [commentArray, setCommentArray] = useState([]);
    // 댓글 상태 관리
    const [comment, setcomment] = useState("");
    const [id, setId] = useState(1);
    const value = useRef();

    // 댓글 추가 함수
    const addComment = () => {
        setId(id + 1);
        const newComment = {
            id: id,
            content: comment,
        };
        // ... ->스프레드연산자(깔아준다)/ 기존에잇던거,새로만들거
        setCommentArray([...commentArray, newComment]);
    };

    return (
        <main className="container3">
            <div className="main main1">
                <div className="main-header">
                    <div className="box">
                        <p className="radius"></p>
                        <p className="personId">nuyhannowk__</p>
                    </div>
                    <div className="dots">
                        <img width="20px" src="/image/option.png" alt="dots" />
                    </div>
                </div>
                <div className="picture picture1"></div>
                <div className="mainIcon">
                    <div>
                        <img
                            width="20px"
                            height="20px"
                            src="./image/heart.png"
                            alt="heart"
                        />
                        <img
                            width="20px"
                            height="20px"
                            src="./image/speech-bubble.png"
                            alt="dialog"
                        />
                        <img
                            width="20px"
                            height="20px"
                            src="./image/option.png"
                            alt="download"
                        />
                    </div>
                    <div>
                        <img
                            width="20px"
                            height="20px"
                            src="./image/bookmark-white.png"
                            alt="mark"
                        />
                    </div>
                </div>
                <div className="like">
                    <div className="likePerson"></div>
                    <div>
                        <span className="bold">dskalfj</span>님 외 10명이
                        좋아합니다.
                    </div>
                </div>
                <div className="write">
                    <span className="margin">행복한 하루~</span>
                    <span className="small">58초전</span>
                </div>
                <div className="hidden">
                    <span className="writer">asdfwr22</span>
                    <span className="writer_text">잘지내지??</span>
                    {commentArray.map((comment) => {
                        return (
                            <Comment
                                content={comment.content}
                                name={comment.name}
                                key={comment.id}
                            />
                        );
                    })}
                </div>
                <div className="comment">
                    <input
                        className="input"
                        type="text"
                        placeholder="댓글달기.."
                        ref={value}
                        onChange={(e) => {
                            setcomment(e.target.value);
                        }}
                    />
                    <button className="btn" onClick={addComment}>
                        게시
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Feed;
