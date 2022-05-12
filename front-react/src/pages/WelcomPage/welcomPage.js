import "./welcomPage.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../Login/loginPage";
import SignUp from "../SignUp/signUpPage";
import Main from "../MainPage/Main";

const WelcomPage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-bg">
              <div className="logo-box">
                <img className="logo" src="img/Navlogo.png" />
              </div>
              <div className="box">
                <div className="box-margin">
                  <p className="bigfont"> 모든 영화가 이곳에! </p>
                  <p className="smallfont">
                    원하는 영화를 검색하고 시청하세요.
                  </p>
                  <Button
                    className="button"
                    variant="secondary"
                    size="lg"
                    active
                    onClick={() => {
                      navigate("/loginpage");
                    }}
                  >
                    무료 이용 시작하기
                  </Button>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/loginpage/*" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<div> 없는 페이지 </div>} />
        <Route path="/MainPage" element={<Main />} />
      </Routes>
    </div>
  );
};

export default WelcomPage;
