import react from "react";
import { useEffect, useState } from "react";
import { APITrack, deleteTrack, getTrack, postSong } from "../utils/api";
import styles from "../styles/new.module.css";

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
  }

  useEffect(() => {
    setId(
      `${artist.replaceAll(" ", "-").toLowerCase()}_${song
        .replaceAll(" ", "-")
        .toLowerCase()}`
    );
  }, [artist, song]);

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <label>
          ID:
          <input placeholder="Id" value={id} readOnly />
        </label>
        <label>
          ARTIST:
          <input
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </label>
        <label>
          TITLE:
          <input
            value={song}
            onChange={(event) => setSong(event.target.value)}
          />
        </label>
        <label>
          IMAGE:
          <input
            value={imgSrc}
            onChange={(event) => setImgSrc(event.target.value)}
          />
        </label>
        <label>
          AUDIO:
          <input
            value={audioSrc}
            onChange={(event) => setAudioSrc(event.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>GO!!</button>
        <button>
          <a className={styles.backHome} href="http://localhost:3000/">
            {"👈 Back!👈 "}
          </a>
        </button>
      </div>
    </form>
  );
}

export default newSong;
