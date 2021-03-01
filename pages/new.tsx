import react from "react";
import { useEffect, useState } from "react";
import { APITrack, deleteTrack, getTrack, postSong } from "../utils/api";
import styles from "../styles/new.module.css";
import Header from "../components/header";

export function newSong() {
  const [id, setId] = useState("");
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [audioSrc, setAudioSrc] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newSong = { id, imgSrc, song, artist, audioSrc };
    postSong(newSong);
    alert("Song added to your playlist! ✅");
  }

  useEffect(() => {
    const id = `${artist}_${song}`.replaceAll(" ", "-").toLowerCase();
    setId(id);
    //`${artist.replaceAll(" ", "-").toLowerCase()}_${song
    //.replaceAll(" ", "-")
    //.toLowerCase()}`
  }, [artist, song]);

  return (
    <form className={styles.form}>
      <header className={styles.header}>
        <Header />
      </header>
      <ul className={styles.list}>
        <li>
          <label className={styles.label}>
            ID:
            <input
              className={styles.placeholder}
              placeholder="Id"
              value={id}
              readOnly
            />
          </label>
        </li>
        <li>
          <label className={styles.label}>
            ARTIST:
            <input
              className={styles.placeholder}
              value={artist}
              onChange={(event) => setArtist(event.target.value)}
            />
          </label>
        </li>
        <li>
          <label className={styles.label}>
            TITLE:
            <input
              className={styles.placeholder}
              value={song}
              onChange={(event) => setSong(event.target.value)}
            />
          </label>
        </li>
        <li>
          <label className={styles.label}>
            IMAGE:
            <input
              className={styles.placeholder}
              value={imgSrc}
              onChange={(event) => setImgSrc(event.target.value)}
            />
          </label>
        </li>
        <li>
          <label className={styles.label}>
            AUDIO:
            <input
              className={styles.placeholder}
              value={audioSrc}
              onChange={(event) => setAudioSrc(event.target.value)}
            />
          </label>
        </li>
        <button className={styles.btn} onClick={handleSubmit}>
          GO!!
        </button>
      </ul>
    </form>
  );
}

export default newSong;
