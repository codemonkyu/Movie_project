import "./BodyBlackoutStyle.css";

// 모달 창 띄울때 주변 어둡게하기
const BodyBlackoutStyle = ({ onSetIsVisible }) => {
  return (
    <div
      className="body-blackout-style"
      onClick={() => onSetIsVisible(false)}
    ></div>
  );
};
export default BodyBlackoutStyle;
