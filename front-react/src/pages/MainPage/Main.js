import React from "react";
import Row from "../../components/Row";
import requests from "../../components/requests";
import Banner from "./Banner";
import "./Main.css";
import NavBar from "../../components/NavBar.js";

// requests / fetchurl 로  row 구성 & banner / navar 추가 메인화면구성
function Main() {
  return (
    <div>
      <div className="main">
        <NavBar />
        <Banner />
        <Row title="평점 높은 영화" fetchUrl={requests.fetchTopRated} />
        <Row title="숨막히는 액션" fetchUrl={requests.fetchActions} />
        <Row title="TV 시리즈" fetchUrl={requests.fetchDramas} />
        <Row title="몰래보는 애니메이션" fetchUrl={requests.fetchAnimations} />
        <Row title="눈물 빼는 코미디" fetchUrl={requests.fetchComedies} />
        <Row title="상상자극 판타지" fetchUrl={requests.fetchFantasy} />
        <Row title="간담이 서늘한 공포" fetchUrl={requests.fetchHorors} />
        <Row title="연애 세포 자극 로맨스" fetchUrl={requests.fetchRomaces} />
      </div>
      {/* <div className="footer">
        <p>Copyrigth@NETCHA</p>
      </div> */}
    </div>
  );
}

export default Main;
