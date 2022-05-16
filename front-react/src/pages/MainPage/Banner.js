import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../components/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMoive] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      // toprated영화 중 랜덤으로 1개의 영화 갖고오기
      setMoive(request.data[Math.floor(Math.random() * request.data.length)]);
    }
    fetchData();
  }, []);

  console.log(movie);

  /*overview 길면 ... 추가*/
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.overview || movie?.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">View</button>
          <button className="banner__button">+ 내가 찜한 컨텐츠</button>
        </div>

        {/* overview길이 */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
