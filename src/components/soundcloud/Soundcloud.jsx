import React from 'react'
import styles from "./styles.module.scss"

const Soundcloud = () => {
  return (
    <iframe
          className={styles.soundcloud}
          width="100%"
          height="25%"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1539716644&color=%23353e44&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
  )
}

export default Soundcloud