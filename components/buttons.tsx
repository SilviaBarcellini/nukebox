import styles from "../styles/buttons.module.css";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  id: string;
};

export default function Buttons({ id }: Props) {
  const [favorite, setFavorite] = useState(null);
  const [storedValue, setValue] = useLocalStorage("favoriteSong", "");

  useEffect(() => {
    if (typeof id !== "string" || favorite === null) {
      return;
    }
    if (favorite) {
      //localStorage.setItem("favoriteSong", id); OLD
      setValue(id);
    }
    if (!favorite) {
      //localStorage.removeItem("favoriteSong"); OLS
      setValue("");
    }
  }, [favorite]);

  useEffect(() => {
    if (typeof id !== "string" || favorite === null) {
      return;
    }
    //setFavorite(id === localStorage.getItem("favoriteSong"));
    setFavorite(id === storedValue);
  }, [id]);

  return (
    <footer>
      <button className={styles.btn} onClick={() => setFavorite(!favorite)}>
        {favorite ? " 💚  " : " 🖤  "}
      </button>
      <button className={styles.btn}>😍 Love it!</button>
      <button className={styles.btn}>🤢 Nope!</button>
    </footer>
  );
}
