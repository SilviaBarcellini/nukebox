import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import AudioPlayer from "../../components/audioPlayer";
import TrackDetails from "../../components/trackDetails";
import Header from "../../components/header";
import { APITrack, deleteTrack, getTrack } from "../../utils/api";
import styles from "../../styles/[id].module.css";

export default function Track() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery !== "string" ? idQuery[0] : idQuery;
  const [track, setTrack] = useState<APITrack>(null);
  const [favoriteTrackIds, setFavoriteTrackIds] = useLocalStorage<string[]>(
    "favoriteTracks",
    []
  );
  const isFavorite = favoriteTrackIds.includes(id);

  useEffect(() => {
    getTrack(id).then((newTrack) => setTrack(newTrack));
  }, [id]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      const newFavoriteTracks = favoriteTrackIds.filter(
        (favoritTrack) => favoritTrack !== id
      );
      setFavoriteTrackIds(newFavoriteTracks);
    } else {
      setFavoriteTrackIds([...favoriteTrackIds, id]);
    }
  };

  const handleDeleteClick = async () => {
    await deleteTrack(track.id);
    router.back();
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <div className={styles.mainContainer}>
          <TrackDetails
            imgSrc={track.imgSrc}
            title={track.song}
            artist={track.artist}
          />
        </div>
      </main>

      <footer>
        <AudioPlayer src={track.audioSrc} />
        {/* <a href="http://localhost:3000/">{"👈 Back!👈 "}</a> */}
        <button onClick={handleFavoriteClick}>
          {isFavorite ? "💚" : "🖤"}
        </button>
        <button onClick={handleDeleteClick}>🗑</button>
      </footer>
    </div>
  );
}
