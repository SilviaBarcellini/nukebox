import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/greeting";
import TrackItem from "../components/track-item";

export default function Home() {
  //♻️ this array contains now our database[library of listed tracks]
  const tracks = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1534526616154-3e2202293a08?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      song: "Song 2",
      artist: "Blur",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3VyZnVsfGVufDB8fDB8&auto=format&fit=crop&w=700&q=60",
      song: "Lyla",
      artist: "Oasis",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsZWJyYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      song: "Yellow",
      artist: "Coldplay",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1524847587549-61a17a931f8b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb3VyZnVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      song: "Shine",
      artist: "Take That",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1596436643132-6e58c3ae4cd4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      song: "In The End",
      artist: "Linkin Park",
    },
  ];

  //♻️ mapping: every single element (track) contained in this array (trackS)
  //will now adere to the function TrackItem (aka build every trackItem with
  //these three properties: ImgSrc, artist, song #commented below for previous version!)
  //NEW ATTRIBUTE=KEY: Keys help React identify which items have changed, are added, or are removed.
  //Keys should be given to the elements inside the array to give the elements a stable identity.
  //each child inside the array needs its own key!

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

{
  /* <ul className={styles.list}>
        <TrackItem
          imgSrc="https://images.unsplash.com/photo-1613473060226-dd81153a63db?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Paul is Dead"
          artist="Scooter"
        />
        <TrackItem
          imgSrc="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="The Unforgiven"
          artist="Metallica"
        />
        <TrackItem
          imgSrc="https://images.unsplash.com/photo-1612831457732-0f6b2156b92d?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Killing in the name of"
          artist="RATM"
        />
        <TrackItem
          imgSrc="https://images.unsplash.com/photo-1613467678197-6054e47c5fc0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="El Presidente"
          artist="Marteria"
        />
      </ul>
 */
}
