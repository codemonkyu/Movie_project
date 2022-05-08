import "./loginPage.css";
import React, { useEffect, useState } from "react";
import SignUp from "../SignUp/signUpPage";
import { Routes, Route, useNavigate } from "react-router-dom";


const LoginPage = () => {
  let navigate = useNavigate();


  let [fade, setFade] = useState('');
  let [bgFade, setBgFade] = useState('');


  useEffect( () => {
    setFade('end')
    setBgFade('bg-end')
    return () => {
      setFade('')
      setBgFade('')
    }
  }, [])

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
                type="text"
                name="username"
                id="username-field"
                className="login-form-field"
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                id="password-field"
                className="login-form-field"
                placeholder="Password"
              />
              <button id="login-form-submit"> 로그인 </button>
              <button id="login-form-submit" onClick={() => {navigate("/signup")}}> 회원가입 </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
