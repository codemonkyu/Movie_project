import "./welcomPage.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../Login/loginPage";
import SignUp from "../SignUp/signUpPage";
import Main from "../MainPage/Main";
import Genre from "../MovieGenre/Genre";
import Search from "../SearchPage/Search";
import LikePage from "../LikePage/LikePage";
import Recommend from "../RecommendPage/Recommend";
import YoutubeApp from "../../YoutubeApp";
import axios from "axios";
import Youtube from "../../service/youtube";

const WelcomPage = () => {
  let navigate = useNavigate();

  //장르 페이지 연결할 변수
  const genre = [
    "액션",
    "판타지",
    "애니메이션",
    "드라마",
    "공포",
    "모험",
    "코미디",
    "역사",
    "서부",
    "스릴러",
    "범죄",
    "다큐멘터리",
    "SF",
    "미스터리",
    "음악",
    "로맨스",
    "가족",
    "전쟁",
    "TV 영화",
  ];

  //유튜브 검색 기능 API
  const httpClient = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
  });
  const youtube = new Youtube(httpClient);

  return (
    //welcomepage 화면
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-bg">
              <div className="logo-box">
                <img className="logo" src="img/Navlogo.png" alt="" />
              </div>
              <div className="box">
                <div className="box-margin">
                  <p className="bigfont"> 모든 영화가 이곳에 </p>
                  <p className="smallfont">
                    자신에게 맞는 영화를 추천받아보세요!
                  </p>
                  <Button
                    className="welcome_button"
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
        {/* welcome page -> apps로 연결되는 페이지 */}
        <Route path="/loginpage/*" element={<LoginPage />} />
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="/MainPage/*" element={<Main />} />
        <Route path="*" element={<div> 없는 페이지 </div>} />
        <Route path="/action/" element={<Genre genre={genre[0]} />} />
        <Route path="/fantasy/" element={<Genre genre={genre[1]} />} />
        <Route path="/animation/" element={<Genre genre={genre[2]} />} />
        <Route path="/drama/" element={<Genre genre={genre[3]} />} />
        <Route path="/horror/" element={<Genre genre={genre[4]} />} />
        <Route path="/adventure/" element={<Genre genre={genre[5]} />} />
        <Route path="/comedy/" element={<Genre genre={genre[6]} />} />
        <Route path="/history/" element={<Genre genre={genre[7]} />} />
        <Route path="/western/" element={<Genre genre={genre[8]} />} />
        <Route path="/thriller/" element={<Genre genre={genre[9]} />} />
        <Route path="/crime/" element={<Genre genre={genre[10]} />} />
        <Route path="/documentary/" element={<Genre genre={genre[11]} />} />
        <Route path="/sf/" element={<Genre genre={genre[12]} />} />
        <Route path="/mystery/" element={<Genre genre={genre[13]} />} />
        <Route path="/music/" element={<Genre genre={genre[14]} />} />
        <Route path="/romance/" element={<Genre genre={genre[15]} />} />
        <Route path="/family/" element={<Genre genre={genre[16]} />} />
        <Route path="/war/" element={<Genre genre={genre[17]} />} />
        <Route path="/tv/" element={<Genre genre={genre[18]} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/likePage" element={<LikePage />} />
        <Route path="/recommendPage" element={<Recommend />} />
        <Route path="/YoutubeApp" element={<YoutubeApp youtube={youtube} />} />
      </Routes>
    </div>
  );
};

export default WelcomPage;
