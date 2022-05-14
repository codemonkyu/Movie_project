import axios from "axios";
import React, {useEffect, useState } from "react";

function Review( id ) {
    //현재까지의 달린 리뷰객체 담기
    const[reviews,setReviews]=useState([]);
    //생성할 리뷰 담기
    const[comment,setComment] = useState();
    const[rank,setRank] = useState();
    //수정할 리뷰 id 담기
    const[editId,setEditId] = useState();

    //리뷰 생성
    const createReview = ({id}) => {
        axios({
            url:"http://127.0.0.1:8000/movies/review_create/"+{id}.id.id+"/",
            method: 'post',
            data:{
                "content":{comment}.comment,
                "rank":{rank}.rank,
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then((res) => {
            console.log(res.data.id);
            setEditId(res.data.id);
        })
        setComment('');
        setRank('');

    };

    //리뷰리스트 보여주기
    const setReviewList = ({id}) => {
        console.log({id}.id.id)
        axios({
            url:"http://127.0.0.1:8000/movies/review/"+{id}.id.id+"/",
            method: 'get',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then((res)=>{
            console.log(res.data);
            setReviews(res.data);
        })

    };

    //리뷰 수정하기
    const editReview = ({editId}) =>{
        axios({
            url:"http://127.0.0.1:8000/movies/review_edit/"+editId+"/",
            method: 'put',
            data:{
                "content":{comment}.comment,
                "rank":{rank}.rank,
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then((res) => {
            console.log(res.data);
        })
    }
    
    //리뷰 삭제하기
    const deleteReview = ({id,editId}) => {
        axios({
            url:"http://127.0.0.1:8000/movies/review_delete/"+{id}.id.id+"/"+editId+"/",
            method: 'delete',
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then((res) => {
            console.log(res.data);
        })
    }

    

    
    return (
        <div className="review-list">
            <button className="show-review-list" onClick={() => setReviewList({id})}>리뷰 보기</button>
            {reviews.map((review) => (
                <div>
                    <p>{review.content}</p>
                    <p>{review.rank}</p>
                </div>
            ))}
            <input type="text" placeholder="content" onChange={(event) =>setComment(event.target.value)} value={comment}  />
            <input type="number" placeholder="rank" onChange={(event) =>setRank(event.target.value)} value={rank} />
            <button className="commentBtn" onClick={() => createReview({id})}>댓글달기</button>
            <button className="editBtn" onClick={() => editReview({editId})}>수정하기</button>
            <button className="deleteBtn" onClick={() => deleteReview({id,editId})}>삭제하기</button>

        </div>
    );

}
export default Review