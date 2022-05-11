import "./loginPage.css";
import React, { useEffect, useState } from "react";
import SignUp from "../SignUp/signUpPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  let navigate = useNavigate();
  let [fade, setFade] = useState("");
  let [bgFade, setBgFade] = useState("");
  let [inputEmail, setInputEmail] = useState("");
  let [inputPw, setInputPw] = useState("");
  let [buttonState, setButtonState] = useState("");
  const check = inputEmail.includes("@") && inputPw.length > 0;

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: inputEmail,
      password: inputPw,
    };

    // REST API에 POST, email과 pw가 동일하다면 Access token을 localStorage에 저장.
    axios
      .post("http://127.0.0.1:8000/accounts/login/", user)
      .then((res) => {

        if (res.data.access_token) {
          localStorage.clear();
          localStorage.setItem("token", res.data.access_token);
          console.log(res.data.access_token);
          navigate('/mainpage')
        } else {
          setInputEmail("");
          setInputPw("");
          localStorage.clear();
        }
      })
      .catch((err) => {
        alert("아이디 또는 비밀번호가 일치하지 않습니다");
        setInputEmail("");
        setInputPw("");
      });
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  useEffect(() => {
    setFade("end");
    setBgFade("bg-end");
    return () => {
      setFade("");
      setBgFade("");
    };
  }, []);

  useEffect(() => {
    if (check) {
      setButtonState("able-button");
    }
    return () => {
      setButtonState("");
    };
  });

  return (
    <div>
      <Routes>
        <Route path="./signup" element={<SignUp />} />
      </Routes>
      <div className={"login-bg bg-start " + bgFade}>
        <div className="logo-box">
          <img className="logo" src="img/넷플릭스.png" />
        </div>
        <div className="box"></div>
        <div className="login-body">
          <div className={"start " + fade} id="main-holder">
            <h1 className="login-header">환영합니다!</h1>
            <form id="login-form">
              <input
                value={inputEmail}
                onChange={handleInputEmail}
                type="email"
                name="E-mail"
                id="username-field"
                className="login-form-field"
                placeholder="E-mail"
              />
              <input
                value={inputPw}
                onChange={handleInputPw}
                type="password"
                name="password"
                id="password-field"
                className="login-form-field"
                placeholder="Password"
              />
              <button
                onClick={onSubmit}
                disabled={!check}
                className={"disable-button " + buttonState}
              >
                로그인
              </button>
              <p>
                아직 계정이 없나요? <Link to={`/signup`}>가입하세요!</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
