import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  let [fade, setFade] = useState("");
  let [bgFade, setBgFade] = useState("");
  let [buttonState, setButtonState] = useState("");
  let [inputEmail, setInputEmail] = useState("");
  let [inputPw, setInputPw] = useState("");
  let [inputPwValidate, setInputPwValidate] = useState("");
  const check =
    inputEmail.includes("@") &&
    inputPw.length > 7 &&
    inputPwValidate.length > 7;

  // email 입력값
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  // pw 입력값
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // pw 입력값 (유효성검사용)
  const handleInputPwValidate = (e) => {
    setInputPwValidate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: inputEmail,
      password1: inputPw,
      password2: inputPwValidate,
    };

    // 유효성 검사
    if (inputPw !== inputPwValidate) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      return false;
    }
    //register API 호출
    axios
      .post(`${process.env.REACT_APP_APIURL}/register/`, user)
      .then((res) => {
        if (res.data.access_token) {
          console.log(res.data.access_token);
          alert("가입을 축하드립니다!");
          window.location.replace("/loginpage");
        } else {
          setInputEmail("");
          setInputPw("");
          setInputPwValidate("");
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.log(user);
        console.log(err);
        alert("이미 존재하는 아이디 입니다.");
      });
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
  }, [check]);

  // Signup 페이지
  return (
    <div className={"login-bg bg-start " + bgFade}>
      <div className="logo-box">
        <img className="logo" src="img/Navlogo.png" alt="logo" />
      </div>
      <div className="box"></div>
      <div className="login-body">
        <div id="main-holder" className={"start " + fade}>
          <h1 className="login-header">회원가입</h1>
          <form id="login-form">
            <input
              value={inputEmail}
              onChange={handleInputEmail}
              type="email"
              name="email"
              id="password-field"
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
              placeholder="Password (특수문자 포함 8자 이상)"
            />
            <input
              value={inputPwValidate}
              onChange={handleInputPwValidate}
              type="password"
              name="password"
              id="password-field"
              className="login-form-field"
              placeholder="Password (특수문자 포함 8자 이상)"
            />
            <input
              onClick={onSubmit}
              disabled={!check}
              type="submit"
              value="회원가입"
              className={"disable-button " + buttonState}
            />
            <p>
              이미 계정이 있으신가요? <Link to={"/loginpage"}>로그인</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
