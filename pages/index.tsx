import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/greeting";
import TrackItem from "../components/track-item";

export default function Home() {
  const tracks = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1534526616154-3e2202293a08?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      song: "Song 2",
      artist: "Blur",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1494247603411-25a2921e0b28?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHVuZGVyZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      song: "Lyla",
      artist: "Oasis",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsZWJyYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      song: "Yellow",
      artist: "Coldplay",
    },
  ];
  const trackItems = tracks.map((track) => (
    <TrackItem
      key={`${track.artist}-${track.song}`}
      imgSrc={track.imgSrc}
      artist={track.artist}
      song={track.song}
    />
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Jan" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}
