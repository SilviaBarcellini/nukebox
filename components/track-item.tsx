import styles from "../styles/track-item.module.css";

type Props = {
  imgSrc: string;
  song: string;
  artist: string;
};

//build a function that has {these items} inside
export default function TrackItem({ imgSrc, song, artist }: Props) {
  return (
    <li className={styles.TrackItem}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.artist}>{artist}</div>
      <div className={styles.song}>{song}</div>
    </li>
  );
}
