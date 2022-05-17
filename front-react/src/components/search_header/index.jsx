import styles from "./styles.module.css";
import React, { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  //메인페이지 가기
  let navigate = useNavigate();

  const handMainpage = () => {
    navigate("/mainpage");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          className={styles.img}
          onClick={handMainpage}
          src="/img/youtubelogo.png"
          alt="logo"
        />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input + "input"}
        type="search"
        placeholder="Search...💬"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <b>🔍</b>
      </button>
      <button onClick={handMainpage}>🏠Home</button>
    </header>
  );
});

export default SearchHeader;
