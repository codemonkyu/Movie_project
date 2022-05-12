import "./welcomPage.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../Login/loginPage";
import SignUp from "../SignUp/signUpPage";
import Main from "../MainPage/Main";
import Ganre from '../MovieGanre/Ganre';

const WelcomPage = () => {
  let navigate = useNavigate();
  const ganre = ['액션','판타지','애니메이션','드라마','공포','모험','코미디','역사','서부','스릴러','범죄','다큐멘터리','SF','미스터리','음악','로맨스','가족','전쟁','TV 영화']
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-bg">
              <div className="logo-box">
                <img className="logo" src="img/넷플릭스.png" alt="" />
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
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="/MainPage/*" element={<Main />} />
        <Route path="/action/" element={<Ganre ganre={ganre[0]}/>} />
        <Route path="/fantasy/" element={<Ganre ganre={ganre[1]}/>} />
        <Route path="/animation/" element={<Ganre ganre={ganre[2]}/>} />
        <Route path="/drama/" element={<Ganre ganre={ganre[3]}/>} />
        <Route path="/horror/" element={<Ganre ganre={ganre[4]}/>} />
        <Route path="/adventure/" element={<Ganre ganre={ganre[5]}/>} />
        <Route path="/comedy/" element={<Ganre ganre={ganre[6]}/>} />
        <Route path="/history/" element={<Ganre ganre={ganre[7]}/>} />
        <Route path="/western/" element={<Ganre ganre={ganre[8]}/>} />
        <Route path="/thriller/" element={<Ganre ganre={ganre[9]}/>} />
        <Route path="/crime/" element={<Ganre ganre={ganre[10]}/>} />
        <Route path="/documentary/" element={<Ganre ganre={ganre[11]}/>} />
        <Route path="/sf/" element={<Ganre ganre={ganre[12]}/>} />
        <Route path="/mystery/" element={<Ganre ganre={ganre[13]}/>} />
        <Route path="/music/" element={<Ganre ganre={ganre[14]}/>} />
        <Route path="/romance/" element={<Ganre ganre={ganre[15]}/>} />
        <Route path="/family/" element={<Ganre ganre={ganre[16]}/>} />
        <Route path="/war/" element={<Ganre ganre={ganre[17]}/>} />
        <Route path="/tv/" element={<Ganre ganre={ganre[18]}/>} />
        <Route path="*" element={<div> 없는 페이지 </div>} />
      </Routes>
    </div>
  );
};

export default WelcomPage;
