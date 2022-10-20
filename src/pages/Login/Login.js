import React, { useRef, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
/*id pw 기준을 통과하면 성공했다는 어떤 시그널이 있었으면
state 값으로 관리할 수 있겠구나 -> id pw 기준이 둘다 통과하면 state -true , 아니면 false
 */
function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };
  const id = useRef();
  const pw = useRef();
  let [isVaild, setVaild] = useState(false);

  return (
    <div className="hole-line">
      <h1 className="head-name">Justgram</h1>
      <form className="login-center">
        <input
          className="login-button login"
          type="text"
          placeholder="전화번호,사용자 이름 또는 이메일"
          onChange={function handleIdInput(e) {
            id.current.value.includes("@") && pw.current.value.length >= 5
              ? setVaild(true)
              : setVaild(false);
          }}
          ref={id}
        />
        <input
          className="login-button login"
          type="password"
          placeholder="비밀번호"
          onChange={function handleInput(e) {
            id.current.value.includes("@") && pw.current.value.length >= 5
              ? setVaild(true)
              : setVaild(false);
          }}
          ref={pw}
        />
        <button
          className="login-button blue-button"
          style={{
            backgroundColor: isVaild ? "rgb(0 149 246)" : "rgb(196 225 251)",
          }}
          onClick={goToMain}
          disabled={isVaild ? false : true}
        >
          로그인
        </button>
      </form>
      <div className="alert">
        <a href="ㅇ">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}
export default Login;
