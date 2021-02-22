import styles from "../styles/[id].module.css";

type Props = {
  imgSrc: string;
  song: string;
  artist: string;
  audioSrc: string;
  /* audioSrc = string; */
};

/* export default function nowPlaying({ imgSrc, song, artist }: Props) {
  return (
    <div className={styles.pageContainer}>
      <header className>{styles.header}</header>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.artist}>{artist}</div>
      <div className={styles.song}>{song}</div>
    </div>
  );
  still needs some extra fix
} */
