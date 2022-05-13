import React from "react";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./Search.css";
import { Container, Row } from "react-bootstrap";


function Search(keyword) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let [bgFade, setBgFade] = useState("");



  async function getMovies() {
    const res = await fetch(
      "http://127.0.0.1:8000/movies/serach/" + {keyword},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
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
        </div>
        {loading ? (
          <h1 id="main-h1"></h1>
        ) : (
          <Container fluid>
            <Row>
              <h1 className="search-h1">{keyword}로 검색하신 결과</h1>
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

  
}

export default Search;
