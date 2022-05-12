import React from "react";
import NavBar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./Ganre.css";
import { Container, Row } from "react-bootstrap";

function Ganre(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let [bgFade, setBgFade] = useState("");

  async function getMovies() {
    const res = await fetch("http://127.0.0.1:8000/movies/genre/"+props.ganre, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(res);
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
        </div >
        {loading ? (
          <h1 id="main-h1"></h1>
        ) : (
          <Container fluid >
            <Row >
              <h1 className="ganre-h1">{props.ganre}</h1>
              {movies.map((movie) => (
                <Movie
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

export default Ganre;
