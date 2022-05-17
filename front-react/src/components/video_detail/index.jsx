import React from "react";
import styles from "./styles.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        title="youtube video player"
        className={styles.video}
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <h1>{video.snippet.title}</h1>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
