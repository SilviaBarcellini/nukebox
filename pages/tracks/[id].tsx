import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/[id].module.css";
import ReactAudioPlayer from "../../components/react-audioplayer";
import Header from "../../components/header";
import Buttons from "../../components/buttons";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    //console.log(id);
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

  //const trackItem = (
  //  <nowPlaying img={track.imgSrc‚} song={track.song} artist={track.artist} />
  //);
  //still needs some extra fix

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <div className={styles.mainContainer}>
          <img className={styles.img} src={track.imgSrc} alt="" />
          <div className={styles.artist}>{track.artist}</div>
          <div className={styles.song}>{track.song}</div>
        </div>
      </main>
      <div>
        <ReactAudioPlayer src={track.audioSrc} />
      </div>
      <footer className={styles.footer}>
        <Buttons />
      </footer>
    </div>
  );
}
