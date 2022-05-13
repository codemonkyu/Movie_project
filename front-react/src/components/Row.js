import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import Modal from "./Modal";
import BodyBlackoutStyle from "./BodyBlackoutStyle";

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMoives] = useState([]);
  const [movie, setMovie] = useState({});

  // Modal창을 보여줄지 말지
  const [isVisble, setVisible] = useState(false);
  const onSetIsVisible = (active) => {
    setVisible(active);
    console.log(movie.id);
  };

  // axios 서버에 데이터 요청
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setMoives(request.data);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    /*컨테이너*/
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => {
              setMovie(movie);
              onSetIsVisible(true);
            }}
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      <div>
        {isVisble && <BodyBlackoutStyle onSetIsVisible={onSetIsVisible} />}
        {isVisble && (
          <Modal
<<<<<<< HEAD
            id={movie.id}
=======
            key={movie.id}
>>>>>>> 15179e28e25c44007613cb52b2119bf702ba31aa
            coverImg={`${base_url}${movie.backdrop_path}`}
            title={movie.title}
            overview={movie.overview}
            release_date = {movie.release_date}
            runtime={movie.runtime}
            genres = {movie.genres}
            setVisible={setVisible}
          />
        )}
      </div>
    </div>
  );
}

export default Row;
