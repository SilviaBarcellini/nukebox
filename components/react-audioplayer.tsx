import { useEffect, useRef, useState } from "react";
import styles from "../styles/ReactAudioPlayer.module.css";

type Props = {
  src: string;
};
//function, it "extracts" src from properties
export default function AudioPlayer({ src }: Props) {
  /* return <audio controls src={src} />; */
  //this is our new audio source that it's going to be played
  const audioRef = useRef(new Audio(src));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioElement = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
      intervalRef.current = setInterval(() => {
        setProgress(audioElement.currentTime);
      }, 2000); //aktualisiert jede 2 sekunden
    } else {
      clearInterval(intervalRef.current);
      audioElement.pause();
    }
  }, [isPlaying]);

  return (
    <div className={styles.audioPlayer}>
      <input
        className={styles.duration}
        type="range"
        min="0"
        max={audioElement.duration}
        value={progress}
      />
      <button className={styles.btn} onClick={() => setIsPlaying(!isPlaying)}>
        <img src={isPlaying ? "/pause.svg" : "/play.svg"} />
      </button>
    </div>
  );
}

/* import //new css file (greetings)

export default function AudioPlayer() {
  return (
    <audio
      className={styles.audioPlayer}
      controls
      src="/media/cc0-audio/t-rex-roar.mp3"
      //properties
    >
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
} */
