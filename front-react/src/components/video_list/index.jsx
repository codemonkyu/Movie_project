import React from "react";
import VideoItem from "../video_item";
import styles from "./styles.module.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
