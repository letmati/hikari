import React from "react";
import styles from "./styles.module.scss";

const IFrame = ({ video }) => {
  return (
    <iframe
      className={styles.iframe}
      width={400}
      height="315"
      src={video}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default IFrame;
