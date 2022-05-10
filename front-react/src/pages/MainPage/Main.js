import React from "react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./Main.css";
import axios from "axios";

function Main() {
  const [movies, setMovies] = useState([]);
  let [bgFade, setBgFade] = useState("");

  useEffect(() => {
    setBgFade("mainBg-end");
    return () => {
      setBgFade("");
    };
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/movies/genre/액션", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        res.data.map((a) => {
          console.log(a);
          // return setMovies(movies.concat(a));
        });
        console.log(movies);
      })
      .catch((error) => {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(localStorage.getItem("token"));
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  return (
    <div className={"mainBg-start " + bgFade}>
      <Header />
      <div className="main-body">
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
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Main;
