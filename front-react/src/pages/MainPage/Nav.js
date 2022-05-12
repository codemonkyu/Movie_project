import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        //스크롤시 함수 확인
        //스ㅡ롤 와이는 -> 얼마나 내린지 알려준다
        setShow(true); // 쇼가 트룰일때 클래스추가
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="img/Navlogo.png" alt="Netcha Logo" />

      <img className="nav_avatar" src="img/NavAvatar.png" alt="nav avatar" />
    </div>
  );
}

export default Nav;
