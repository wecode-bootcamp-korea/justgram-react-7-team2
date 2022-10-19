import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  let [isValid, setIsValid] = useState(false);

  const handleIdInput = (event) => {
    setId(event.target.value);
    id.includes("@") && pw.length >= 5 ? setIsValid(true) : setIsValid(false);
  };
  const handlePwInput = (event) => {
    setPw(event.target.value);
    id.includes("@") && pw.length >= 5 ? setIsValid(true) : setIsValid(false);
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
            onChange={handleIdInput}
          />
          <input
            type="password"
            className="inputArea"
            id="pwInput"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <Link to="/Main">
            <button
              id="loginBtn"
              style={{ backgroundColor: isValid ? "#0095F6" : "#c4e1fb" }}
            >
              로그인
            </button>
          </Link>
        </form>
        <a href="#" id="lostPw">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
