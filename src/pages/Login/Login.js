import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom;";
import "./Login.scss";

const Login = () => {
    const id = useRef();
    const pw = useRef();
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/Main");
    };

    const [isValid, setIsValid] = useState(false);

    const handleInput = () => {
        id.current.value.includes("@") && pw.current.value.length >= 5
            ? setIsValid(true)
            : setIsValid(false);
    };

    return (
        <div id="flexContainer" className="center">
            <div id="loginMain" className="center">
                <h1 id="title">justgram</h1>
                <form action="#" className="inputForm center">
                    <input
                        type="text"
                        className="inputArea"
                        id="idInput"
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                        onChange={handleInput}
                        ref={id}
                    />
                    <input
                        type="password"
                        className="inputArea"
                        id="pwInput"
                        placeholder="비밀번호"
                        onChange={handleInput}
                        ref={pw}
                    />
                    <button
                        id="loginBtn"
                        onClick={goToMain}
                        style={{
                            backgroundColor: isValid ? "black" : "yellow",
                        }}
                    >
                        <span>로그인</span>
                    </button>
                </form>
                <p id="lostPw">비밀번호를 잊으셨나요?</p>
            </div>
        </div>
    );
};

export default Login;
