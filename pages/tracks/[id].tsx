import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/[id].module.css";
import ReactAudioPlayer from "../../components/react-audioplayer";
import Header from "../../components/header";
//import Buttons from "../../components/buttons";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Track() {
  const router = useRouter();
  //const { id } = router.query;
  const { id: idQuery } = router.query;
  //const id = typeof idQuery === "string" ? idQuery : idQuery[0];
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery !== "string" ? idQuery[0] : idQuery;
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
        <ReactAudioPlayer src={track.audioSrc} id={track.id} />
      </div>
      <footer className={styles.footer}>
        {/* <div>
//          <Buttons id={track.id} />
        </div> */}
      </footer>
    </div>
  );
}
