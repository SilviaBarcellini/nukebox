//new from commit Fetch tracks from API
//every APITrack element will have to contain this:
export type APITrack = {
  id: string;
  imgSrc: string;
  song: string;
  artist: string;
  audioSrc: string;
};

//export asyncfunction "getTrack"
export async function getTracks() {
  //add const "response" and wait for the promise
  const response = await fetch("/api/tracks");
  //add const from type "apitracks" and wait for promise
  //const tracks: Array<APITrack> = await response.json();
  const tracks: APITrack[] = await response.json();
  //return tracks
  return tracks;
}

export async function getTrack(id: string) {
  const response = await fetch(`/api/tracks/${id}`);
  const track: APITrack = await response.json();
  return track;
}

// Alternative with .then chaining
// export function getTracks() {
//   return fetch("/api/tracks")
//     .then((response) => response.json())
//     .then((tracks: APITrack[]) => tracks);
// }

//cfr. fetch on javascript.info
