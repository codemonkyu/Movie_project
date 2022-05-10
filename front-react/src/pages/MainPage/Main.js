import React from "react";
import Header from "../../components/Header";
import {useEffect, useState} from "react";
import Movie from "../../components/Movie"

function Main() {
  const [movies,setMovies] = useState([]);
  async function getMovies(){
    const res = fetch('http://127.0.0.1:8000/movies/genre_list/액션')
    const movies = await (await res).json();
    setMovies(movies);
    console.log(movies);
  };
  useEffect(()=>{
    getMovies();
  },[]);
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div>
        {movies.map((movie) => (
          <Movie id={movie.id} title={movie.title} coverImg = {movie.poster_path}/>
        ))}
      </div>
    </div>
  );
}

export default Main;
