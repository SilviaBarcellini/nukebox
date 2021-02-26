import react from "react";
import { useEffect, useState } from "react";
import styles from "../styles/new.module.css";

export function newSong(props) {
  const [id, setId] = useState("");
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");

  /* 
  function handleChange(event) {
    setId(event.target.value);
  } */
  function handleSubmit(event) {
    alert();
    event.preventDefault();
  }

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <label>
          ID:
          <input type="text" value={id} />
        </label>
        <label>
          ARTIST: <input type="text" value={artist} />
        </label>
        <label>
          TITLE: <input type="text" value={song} />
        </label>
        <input type="submit" value="GO!!!" />
      </div>
    </form>
  );
}

export default newSong;
