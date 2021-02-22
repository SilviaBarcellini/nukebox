import Head from "next/head";
import { useEffect, useState } from "react"; //new!!
import styles from "../styles/Home.module.css";
import Greeting from "../components/greeting";
import TrackItem from "../components/track-item";
import { APITrack, getTracks } from "../utils/api"; //new!
import Link from "next/link"; //link to track page
import tracks from "./api/tracks";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);

  // (*)
  useEffect(() => {
    //first: the hello part of the website is loaded
    console.log("Home page is mounted");
    //second: the songs are loaded
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);
  //end commit commit fetch tracks from api (*)

  const trackItems = tracks.map((track) => (
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <TrackItem
          imgSrc={track.imgSrc}
          artist={track.artist}
          song={track.song}
        />
      </a>
    </Link>
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Philipp" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}

//NOTES
// obsolete from new commit (fetch tracks from API commit)
//My quelle will be db.json songs, not this anymore (end commit)
//OLD!!♻️ this array contains now our database[library of listed tracks]
/* const tracks = [
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
  ]; */

//♻️ mapping: every single element (track) contained in this array (trackS)
//will now adere to the function TrackItem (aka build every trackItem with
//these three properties: ImgSrc, artist, song #commented below for previous version!)
//NEW ATTRIBUTE=KEY: Keys help React identify which items have changed, are added, or are removed.
//Keys should be given to the elements inside the array to give the elements a stable identity.
//each child inside the array needs its own key!

//new! from commit fetch tracks from api
//this is now my new quelle
//use now apiTracks newTracks is the result of getTracks()
//add const "tracks" and set the status to an empty array from type "apitracks"
//(*)
//https://reactjs.org/docs/hooks-reference.html#useeffect
//useEffect(); = Accepts a function that contains imperative code
//The function passed to useEffect will run after the render is committed to the screen.
//By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
//If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders. Learn more about how to deal with functions and what to do when the array values change too often.
//If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works.
//If you pass an empty array ([]), the props and state inside the effect will always have their initial values. While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model, there are usually better solutions to avoid re-running effects too often. Also, don’t forget that React defers running useEffect until after the browser has painted, so doing extra work is less of a problem.
//We recommend using the exhaustive-deps rule as part of our eslint-plugin-react-hooks package. It warns when dependencies are specified incorrectly and suggests a fix.
//https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435

//(*)Add alternative solution for getTracks in useEffect commit
// async function doFetch() {
//   const newTracks = await getTracks();
//   setTracks(newTracks);
// }
// doFetch()
