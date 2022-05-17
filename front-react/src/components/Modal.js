import "./Modal.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Review from "./Review";

const Modal = ({
  id,
  coverImg,
  title,
  overview,
  release_date,
  runtime,
  genres,
  setVisible,
}) => {
  // console.log(title)
  //꺼짐 버튼
  let [modalAnimation, setModalAnimation] = useState("");
  let [posterFade, setPosterFade] = useState("");

  useEffect(() => {
    setPosterFade("poster-end");
    setModalAnimation("modal-end");
    console.log(modalAnimation);
    getLike({ id });
  }, []);

  const Btn = () => {
    setVisible(false);
  };
  const base_url_like = `${process.env.REACT_APP_APIURL}/movies/like/`;
  const [like, setLike] = useState();
  const HeartImg = "img/Heart.png";
  const EmptyHeartImg = "img/EmptyHeart.png";
  //현재 상태
  const [liking, setLiking] = useState(like);

  //좋아요한 영화 리스트 가져오기
  //true 유지 , false 유지 내가찜한페이지에서 유지 x
  const getLike = (id) => {
    axios({
      url: `${process.env.REACT_APP_APIURL}/movies/like_list/`,
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res.data);
      console.log(id.id); //영화 id
      res.data.map((movie) => {
        if (movie.id === id.id) {
          console.log(true);
          setLiking(true);
        } else {
          console.log(false);
          setLiking(false);
        }
      });
    });
  };

  const setLikes = (id) => {
    axios({
      url: base_url_like + { id }.id.id + "/",
      method: "post",
      data: {
        liking: true,
        count: 1,
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res.data[0]);
      setLike(res.data[0]);
    });
    // 현재 상태 저장해주기
  };

  useEffect(() => {
    setLiking(like);
  }, [like]);

  const genre = {
    12: "모험",
    14: "판타지",
    16: "애니메이션",
    18: "드라마",
    27: "공포",
    28: "액션",
    35: "코미디",
    36: "역사",
    37: "서부",
    53: "스릴러",
    80: "범죄",
    99: "다큐멘터리",
    878: "SF",
    9648: "미스터리",
    10402: "음악",
    10749: "로맨스",
    10751: "가족",
    10752: "전쟁",
    10770: "TV 영화",
  };

  return (
    <div className={"detail-movie-modal modal-start " + modalAnimation}>
      <div>
        {/* 영화타이틀 & 좋아요기능 */}
        <h2 className="h2-padding">
          {title}
          <button className="button-right" onClick={() => setLikes({ id })}>
            <img
              className="heart"
              src={liking ? HeartImg : EmptyHeartImg}
              alt="heartImg"
            />
            {like}
          </button>
        </h2>
        {/* 영화 포스터 backdrop */}
        <div>
          <img
            className={"poster poster-start " + posterFade}
            src={coverImg}
            alt={title}
          />
        </div>
        {/* 포스터 바텀 페이드 효과 */}
        <div className="poster_gradient"></div>

        {/* 영화 정보 칸 */}
        <div>
          <div className="left">
            <p>상영시간 : {runtime}분</p>
          </div>
          <div className="right">
            <p>개봉일자 : {release_date}</p>
          </div>
        </div>

        <ul>
          {genres.map((g) => (
            <li key={g}>{genre[g]}</li>
          ))}
        </ul>

        <p className="overview_indent">{overview}</p>
        <Review id={id} />
      </div>

      {/* close버튼 */}
      <div>
        <button className="detail-movie-btn" onClick={() => Btn()}>
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
