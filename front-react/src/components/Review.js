import axios from "axios";
import React, { useEffect, useState } from "react";

function Review(id) {
  //현재까지의 달린 리뷰객체 담기
  const [reviews, setReviews] = useState([]);
  //생성할 리뷰 담기
  const [comment, setComment] = useState();
  const [rank, setRank] = useState();
  const dupCheck = [];
  //수정할 리뷰 id 담기

  //리뷰 생성
  const createReview = () => {
    axios({
      url: "http://127.0.0.1:8000/movies/review/" + { id }.id.id + "/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(() => {
      if (dupCheck.some((dupCheck) => dupCheck == localStorage.getItem("pk"))) {
        alert("이미 리뷰를 작성하셨습니다.");
      } else {
        axios({
          url:
            "http://127.0.0.1:8000/movies/review_create/" + { id }.id.id + "/",
          method: "post",
          data: {
            content: { comment }.comment,
            rank: { rank }.rank,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then(() => {
          setReviewList();
        });
      }
    });
    setComment("");
    setRank("");
  };

  useEffect(() => {
    setReviewList();
  }, []);

  //리뷰리스트 보여주기
  const setReviewList = () => {
    axios({
      url: "http://127.0.0.1:8000/movies/review/" + { id }.id.id + "/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      setReviews(res.data);
    });
  };

  //리뷰 수정하기
  const editReview = (reviewuser, reviewid) => {
    axios({
      url: "http://127.0.0.1:8000/movies/review/" + { id }.id.id + "/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(() => {
      if (localStorage.getItem("pk") == reviewuser) {
        axios({
          url: "http://127.0.0.1:8000/movies/review_edit/" + reviewid + "/",
          method: "put",
          data: {
            content: { comment }.comment,
            rank: { rank }.rank,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then(() => {
          setReviewList();
        });
      }
    });
  };

  //리뷰 삭제하기
  const deleteReview = (reviewuser, reviewid) => {
    axios({
      url: "http://127.0.0.1:8000/movies/review/" + { id }.id.id + "/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(() => {
      if (localStorage.getItem("pk") == reviewuser) {
        axios({
          url:
            "http://127.0.0.1:8000/movies/review_delete/" +
            { id }.id.id +
            "/" +
            reviewid +
            "/",
          method: "delete",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then(() => {
          setReviewList();
        });
      }
    });
  };

  return (
    <div className="review-list">
      <hr />
      {reviews.map((review) => {
        dupCheck.push(review.user);

        return (
          <div>
            <p>현재 로그인 사용자: {localStorage.getItem("pk")}</p>
            <p>작성자: {review.user}</p>
            <p>내용: {review.content}</p>
            <p>평점: {review.rank}</p>
            <button
              className="editBtn"
              onClick={() => editReview(review.user, review.id)}
            >
              수정하기
            </button>
            <button
              className="deleteBtn"
              onClick={() => {
                deleteReview(review.user, review.id);
              }}
            >
              삭제하기
            </button>
            <hr />
          </div>
        );
      })}
      <input
        type="text"
        placeholder="content"
        onChange={(event) => setComment(event.target.value)}
        value={comment}
      />
      <input
        type="number"
        placeholder="rank"
        onChange={(event) => setRank(event.target.value)}
        value={rank}
      />
      <button className="commentBtn" onClick={() => createReview()}>
        댓글달기
      </button>
    </div>
  );
}
export default Review;
