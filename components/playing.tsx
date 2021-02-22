import styles from "../styles/[id].module.css";

type Props = {
  imgSrc: string;
  song: string;
  artist: string;
  /* audioSrc = string; */
};

/* export default function nowPlaying({ imgSrc, song, artist }: Props) {
    return (
        
         <main>
           <ul className={styles.mainContainer}>
           <li className={styles.TrackItem}>
        <img className={styles.img} src={imgSrc} alt="" />
        <div className={styles.artist}>{artist}</div>
        <div className={styles.song}>{song}</div>
        {/* <div>{audioSrc}</div> */
/* </li>
               </ul>  
             </main>
      
    ); */
/* export default function nowPlaying(props: Props) {
  const singlePlaying = (
    <div className={styles.container}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.artist}>{artist}</div>
      <div className={styles.song}>{song}</div>
    </div>
  );
  return singlePlaying; 
}
*/
