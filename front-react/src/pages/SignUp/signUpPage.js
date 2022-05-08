import "./signUpPage.css";
import React, { useEffect, useState} from "react";

const SignUp = () => {

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
    <div className={"login-bg bg-start " + bgFade}>
      <div className="logo-box">
        <img className="logo" src="img/넷플릭스.png" />
      </div>
      <div className="box"></div>
      <div className="login-body">
        <div id="main-holder" className={"start " + fade} >
          <h1 className="login-header">회원가입</h1>
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
            <input
              type="eamil"
              name="password"
              id="password-field"
              className="login-form-field"
              placeholder="e-mail"
            />
            <input
              type="submit"
              value="회원가입"
              id="login-form-submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
