import styles from "../styles/buttons.module.css";
import { useEffect, useRef, useState } from "react";

type Props = {
  /* love: string;         
  hate: string; */
  id: string;
  /* mine: string; */
};

export default function Buttons({ id }: Props) {
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    if (typeof id !== "string" || favorite === null) {
      return;
    }
    if (favorite) {
      localStorage.setItem("favoriteSong", id);
    }
    if (!favorite) {
      localStorage.removeItem("favoriteSong");
    }
  }, [favorite]);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    setFavorite(id === localStorage.getItem("favoriteSong"));
  }, [id]);

  return (
    <footer>
      <button
        className={styles.favorite}
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? "💚" : "🖤"}
      </button>
      <button className={styles.hate}>😍 Love it!</button>
      <button className={styles.hate}>🤢 Nope!</button>
    </footer>
  );
}
