import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [isValid, setIsValid] = useState(false);

  const handleIdInput = (event) => {
    const idValue = event.target.value;
    setId(idValue);
    idValue.includes("@") && password && password.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlePwdInput = (event) => {
    const pwdValue = event.target.value;
    setPassword(pwdValue);
    id.includes("@") && pwdValue.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const goMain = () => {
    isValid ? navigate("/main") : navigate("/");
  };

  return (
    <div className="wrap">
      <div className="container">
        <div className="content">
          <div className="img-box"></div>
          <div className="login-box">
            <div className="main">
              <div className="title">
                <p>Justgram</p>
              </div>
              <form className="login">
                <input
                  type="text"
                  id="user"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={handleIdInput}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="비밀번호"
                  onChange={handlePwdInput}
                />
                <button
                  style={{
                    backgroundColor: isValid ? "#005df4" : "#0095ff4f",
                  }}
                  className="login-btn"
                  onClick={goMain}
                >
                  로그인
                </button>
              </form>
              <div className="other">
                <div className="text">
                  <hr />
                  <p>또는</p>
                  <hr />
                </div>
                <div className="social">
                  <p>
                    <b>Facebook</b>으로 로그인
                  </p>
                </div>
                <div className="lost-pwd">
                  <p>비밀번호를 잊으셨나요?</p>
                </div>
              </div>
            </div>
            <div className="join">
              <p>
                계정이 없으신가요? <b> 가입하기 </b>
              </p>
            </div>
            <div className="download">
              <p>앱을 다운로드 하세요.</p>
              <input type="button" id="download-btn" value="App Store"></input>
              <input
                type="button"
                id="download-btn"
                value="Google Play"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="bt-content">
        <footer>
          <div className="footer-menu">
            <p>Meta</p>
            <p>소개</p>
            <p>블로그</p>
            <p>채용 정보</p>
            <p>도움말</p>
            <p>API</p>
            <p>개인정보처리방침</p>
            <p>약관</p>
            <p>인기 계정</p>
            <p>해시태그</p>
            <p>위치</p>
            <p>Instagram Life</p>
            <p>연락처 업로드 & 비사용자</p>
            <p>댄스</p>
            <p>식음료</p>
            <p>집 및 정원</p>
            <p>음악</p>
            <p>시각 예술</p>
          </div>
          <div className="copyright">
            <p>© 2022 Instagram from Meta</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Login;
