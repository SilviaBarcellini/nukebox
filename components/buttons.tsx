import styles from "../styles/buttons.module.css";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  id: string;
};

export default function Buttons({ id }: Props) {
  const [favoriteSongs, setFavoriteSongs] = useLocalStorage(
    //(*)const [favoriteSongs, setFavoriteSongs] = useLocalStorage<string[]>(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

  useEffect(() => {
    //(*)  if (typeof id !== "string" || favorite === null) {
    //(*)    return;
    //(*)  }
  }, [id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
    }
  };

  return (
    <footer>
      <button className={styles.btn} onClick={handleFavoriteClick}>
        {favorite ? "💚 " : "🖤"}
      </button>
      <button className={styles.btn}>😍 Love it!</button>
      <button className={styles.btn}>😡 Nope!</button>
    </footer>
  );
}

//commented is 🏷️ Add types to useLocalStorage commit
//look useLocalsStorage (commented)
