import styles from "../styles/addSongs.module.css";

export default function OpenFormPage() {
  return (
    <a href="http://localhost:3000/new">
      <button className={styles.btn}>Add!!</button>
    </a>
  );
}
