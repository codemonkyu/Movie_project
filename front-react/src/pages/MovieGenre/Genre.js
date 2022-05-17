import React from "react";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./Genre.css";
import { Container, Row } from "react-bootstrap";

function Genre(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let [bgFade, setBgFade] = useState("");

  // genre별 영화 가져오는 API
  async function getMovies() {
    const res = await fetch(
      `${process.env.REACT_APP_APIURL}/movies/genre/` + props.genre,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const movies = await res.json();
    setMovies(movies);
    console.log(movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    setBgFade("mainBg-end");
    return () => {
      setBgFade("");
    };
  }, []);

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
            <Row>
              <h1 className="ganre-h1">{props.genre}</h1>
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

export default Genre;
