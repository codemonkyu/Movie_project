import React from "react";
import Row from "../../Row";
import requests from "../../requests";

function Main() {
  return (
    <div className="App">
      <h1>NETCHA</h1>
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
