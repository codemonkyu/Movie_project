import "./Modal.css";
import React, {useEffect, useState } from "react";
import axios from "axios";
import Review from "./Review";

const Modal = ({ id, coverImg, title, overview, release_date, runtime, genres, setVisible }) => {
  // console.log(title)
  //꺼짐 버튼
  const Btn = () => {
    setVisible(false);
  };
  const base_url_like = "http://127.0.0.1:8000/movies/like/";
  const [like,setLike] = useState()
  const HeartImg = "img/Heart.png"
  const EmptyHeartImg = "img/EmptyHeart.png"
  //현재 상태
  const [liking,setLiking] =useState(like)
  

  const setLikes = (id) => {
    axios({
      url: base_url_like+{id}.id.id+"/",
      method: 'post',
      data:{
        "liking":true,
        "count":1
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) =>{
      console.log(res.data[0]);
      setLike(res.data[0]);
      
    })
    // 현재 상태 저장해주기 
  };

  useEffect(() => {
    setLiking(like)
  },[like]);


  const genre = {
    '12': "모험",
    '14': "판타지",
    '16': "애니메이션",
    '18': "드라마",
    '27': "공포",
    '28': "액션",
    '35': "코미디",
    '36': "역사",
    '37': "서부",
    '53': "스릴러",
    '80': "범죄",
    '99': "다큐멘터리",
    '878': "SF",
    '9648': "미스터리",
    '10402': "음악",
    '10749': "로맨스",
    '10751': "가족",
    '10752': "전쟁",
    '10770': "TV 영화"
  }

  return (
    <div className="detail-movie-modal">
      <div>
        <h2>{title}</h2>
        <div >
          <img className="poster" src={coverImg} alt={title} />
        </div>
        <div>
          <div className="left"><p>상영시간 : {runtime}분</p></div> 
          <div className="right"><p>개봉일자 : {release_date}</p></div>
        </div>
        <div>
          <button className="heart-btn" onClick={() => setLikes({id})}><img className="heart" src={liking?HeartImg:EmptyHeartImg }
          alt="heartImg"/>{like}</button>
        </div>
        <ul>
          {genres.map((g) => (
            <li key={g}>{genre[g]}</li>
          ))}
        </ul>
        <p>{overview}</p>
        <Review id={id} />
      </div>
      <div >
        <button className="detail-movie-btn" onClick={() => Btn()}><p>close</p></button>
      </div>
    </div>
  );
};

export default Modal;
