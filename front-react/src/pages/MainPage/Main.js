import React from "react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./Main.css";
import axios from "axios";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let [bgFade, setBgFade] = useState("");

  useEffect(() => {
    setBgFade("mainBg-end");
    return () => {
      setBgFade("");
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movies/genre/액션", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setMovies(movies => ([...movies, res.data]))
        setLoading(false);
      })
  }, [movies]);

  return (
    <div className={"mainBg-start " + bgFade}>
      <Header />
      <div className="main-body">

          {
            loading 
            ? <h1>Loading...</h1> 
            :
            
            <div>
              {
                movies.map((movie, i) => {
                  return (
                    <Movie
                      id={movie[i].id}
                      title={movie[i].title}
                      coverImg={movie[i].poster_path}
                    />
                  );
              })}
          </div>
          }
      </div>
    </div>
  );
}

export default Main;