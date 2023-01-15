import React from "react";
import videos from "@/assets/data";
import IFrame from "../iframe/IFrame";
import styles from "./styles.module.scss"

const VideoLayout = () => {
  return (
    <section className={styles.layout}>
      {videos.map((video, index) => {
        return <IFrame video={video} key={index} />;
      })}
    </section>
  );
};

export default VideoLayout;
