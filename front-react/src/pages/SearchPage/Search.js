import React from "react";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./Search.css";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router";

function Search(props) {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let [bgFade, setBgFade] = useState("");

  //serch API 호출
  async function getMovies() {
    const res = await fetch(
      `${process.env.REACT_APP_APIURL}/movies/search/` + state,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const movies = await res.json();
    setMovies(movies[0]);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    setBgFade("mainBg-end");
    return () => {
      setBgFade("");
    };
  }, []);

  // Search 함수로 뿌려지는 화면
  return (
    <div className={"mainBg-start " + bgFade}>
      <div className="main-body">
        <div>
          <NavBar />
        </div>
        {loading ? (
          <h1 id="main-h1">Loading...🙄</h1>
        ) : (
          <Container fluid>
            <Row className="Rows">
              <h1 className="ganre-h1">"{state}"(으)로 검색한 결과</h1>
              {movies.map((movie) => (
                <Movie
                  movie={movie}
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.poster_path}
                />
              ))}
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

export default Search;
