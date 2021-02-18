import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setFlagsFromString } from "v8";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/track-item.module.css";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    //console.log(id);
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
    // todo get track by `id`
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div>Now Playing: {track.song}</div>
    </div>
  );

  {
    /* <div>Now Playing: {track.song}</div> */
  }
}
