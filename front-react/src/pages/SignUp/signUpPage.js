import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
  let [fade, setFade] = useState("");
  let [bgFade, setBgFade] = useState("");
  let [buttonState, setButtonState] = useState("");
  let [inputEmail, setInputEmail] = useState("");
  let [inputPw, setInputPw] = useState("");
  let [inputPwValidate, setInputPwValidate] = useState("");
  const check = inputEmail.includes("@") && inputPw.length > 3 && inputPwValidate.length > 3;


  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputPwValidate = (e) => {
    setInputPwValidate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: inputEmail,
      password1: inputPw,
      password2: inputPwValidate
    }

    // 유효성 검사
    if(inputPw !== inputPwValidate) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다')
      return false
    }

    axios.post('http://127.0.0.1:8000/register/', user)
      .then(res => {
        if (res.data.access_token) {
          console.log(res.data.access_token)
          alert('가입을 축하드립니다!')
          window.location.replace('/loginpage')
          // 사용하려면 App.js에서 /로 라우팅해야 한다
        } else {
          setInputEmail('')
          setInputPw('')
          setInputPwValidate('')
          localStorage.clear()
        }
      })
      .catch(err => {
        console.log(err);
        alert('이미 존재하는 아이디 입니다.')
      })
  }

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

  return (
    <div className={"login-bg bg-start " + bgFade}>
      <div className="logo-box">
        <img className="logo" src="img/넷플릭스.png" />
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
              placeholder="Password"
            />
            <input
              value={inputPwValidate}
              onChange={handleInputPwValidate}
              type="password"
              name="password"
              id="password-field"
              className="login-form-field"
              placeholder="Password"
            />
            <input
              onClick={onSubmit}
              disabled={!check}
              type="submit"
              value="회원가입"
              className={"disable-button " + buttonState}
            />
            <p>
              이미 계정이 있으신가요? <Link to={'/loginpage'}>로그인</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;