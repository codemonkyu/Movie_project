import React from "react";
import Row from "../../components/Row";
import requests from "../../components/requests";
import Banner from "./Banner";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <Banner />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="Actions" fetchUrl={requests.fetchActions} />
      <Row title="Adventures" fetchUrl={requests.fetchAdventures} />
      <Row title="Animations" fetchUrl={requests.fetchAnimations} />
      <Row title="Romaces" fetchUrl={requests.fetchRomaces} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Main;
