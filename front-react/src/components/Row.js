import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMoives] = useState([]);

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
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
