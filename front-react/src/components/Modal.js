import "./Modal.css";

const Modal = ({ key, coverImg, title, setVisible }) => {
  // console.log(title)
  //꺼짐 버튼
  const Btn = () => {
    setVisible(false);
  };
  return (
    <div className="detail-movie-modal">
      <div>
        영화 상세 정보
        <h2>{title}</h2>
        <img src={coverImg} alt={title} />
      </div>
      <div className="detail-movie-btn">
        <button onClick={() => Btn()}>꺼짐</button>
      </div>
    </div>
  );
};

export default Modal;
