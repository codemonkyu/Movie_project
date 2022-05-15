import React from "react";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./Genre.css";
import { Container, Row } from "react-bootstrap";
import Modal from "../../components/Modal";
import BodyBlackoutStyle from "../../components/BodyBlackoutStyle";

const base_url = "http://image.tmdb.org/t/p/";

function Genre(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  let [bgFade, setBgFade] = useState("");
  const original = "original";

  // Modal창을 보여줄지 말지
  const [isVisble, setVisible] = useState(false);
  const onSetIsVisible = (active) => {
    setVisible(active);
  };

  // genre별 영화 가져오는 API
  async function getMovies() {
    const res = await fetch(
      "http://127.0.0.1:8000/movies/genre/" + props.genre,
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
          <h1 id="main-h1">Loading...</h1>
        ) : (
          <Container fluid>
            <Row>
              <h1 className="ganre-h1">{props.genre}</h1>
              {movies.map((movie) => (
                <Movie
                  onClick={() => {
                    setMovie(movie);
                    onSetIsVisible(true);
                  }}
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.poster_path}
                />
              ))}
            </Row>
          </Container>
        )}
        <div>
          {isVisble && <BodyBlackoutStyle onSetIsVisible={onSetIsVisible} />}
          {isVisble && (
            <Modal
              id={movie.id}
              coverImg={`${base_url}${original}${movie.backdrop_path}`}
              title={movie.title}
              overview={movie.overview}
              release_date={movie.release_date}
              runtime={movie.runtime}
              genres={movie.genres}
              setVisible={setVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Genre;
