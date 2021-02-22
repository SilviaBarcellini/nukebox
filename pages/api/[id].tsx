import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/track-item.module.css";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
    // todo get track by `id`
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

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
    </div>
  );
}
