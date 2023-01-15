import IFrame from "@/components/iframe/IFrame";
import Head from "next/head";
import videos from "@/assets/data";
import Header from "@/components/header/Header";
import styles from "@/styles/Home.module.scss";
import VideoLayout from "@/components/videoLayout/VideoLayout";
import Soundcloud from "@/components/soundcloud/Soundcloud";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hikaridubz</title>
        <meta name="Hikari Dubz" content="Riddim DJ web page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <VideoLayout />
        <Soundcloud />
      </main>
    </>
  );
}
