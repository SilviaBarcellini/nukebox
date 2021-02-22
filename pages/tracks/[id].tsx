import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/[id].module.css";
import ReactAudioPlayer from "../../components/react-audioplayer";

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
        <a className={styles.backHome} href="http://localhost:3000/">
          👈 Back!👈{" "}
        </a>
        <div className={styles.track}>Now Playing: {track.song}</div>
      </header>
      <main>
        <div className={styles.mainContainer}>
          <img className={styles.img} src={track.imgSrc} alt="" />
          <div className={styles.artist}>{track.artist}</div>
          <div className={styles.song}>{track.song}</div>
          {/* <div>{audioSrc}</div> */}
        </div>
      </main>
      <footer className={styles.footer}>
        <ReactAudioPlayer src={track.audioSrc} />
        <a className={styles.love} href="">
          😍 Love it!
        </a>

        <a className={styles.mine} href="">
          my list 🖤
        </a>
        <a className={styles.hate} href="">
          🤢 Nope!
        </a>
      </footer>

      <div>
        <figure>
          <audio
            className={styles.audioPlayer}
            controls
            src="/media/cc0-audio/t-rex-roar.mp3"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </div>
    </div>
  );
}
