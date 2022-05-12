import React from "react";
import Row from "../../components/Row";
import requests from "../../components/requests";
import Banner from "./Banner";
import "./Main.css";
import Nav from "./Nav";

function Main() {
  return (
    <div className="main">
      <Nav />
      <Banner />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="Actions" fetchUrl={requests.fetchActions} />
      <Row title="Dramas" fetchUrl={requests.fetchDramas} />
      <Row title="Animations" fetchUrl={requests.fetchAnimations} />
      <Row title="Comedies" fetchUrl={requests.fetchComedies} />
      <Row title="Horors" fetchUrl={requests.fetchHorors} />
      <Row title="Romaces" fetchUrl={requests.fetchRomaces} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Main;
