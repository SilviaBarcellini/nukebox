//new from commit Fetch tracks from API

import tracks from "../pages/api/tracks";

//every APITrack element will have to contain this:
export type APITrack = {
  id: string;
  imgSrc: string;
  song: string;
  artist: string;
  audioSrc: string;
};

//OLD
//export asyncfunction "getTrack"
//export async function getTracks() {
//add const "response" and wait for the promise
//const response = await fetch("/api/tracks");
//add const from type "apitracks" and wait for promise
//const tracks: Array<APITrack> = await response.json();
//const tracks: APITrack[] = await response.json();
//return tracks
//return tracks;
//}

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getTracks(): Promise<APITrack[]> {
  return await fetchURL<APITrack[]>("/api/tracks");
}

export async function getTrack(id: string): Promise<APITrack> {
  return await fetchURL<APITrack>(`/api/tracks/${id}`);
}

//OLD
//export async function getTrack(id: string) {
//  const response = await fetch(`/api/tracks/${id}`);
//  const track: APITrack = await response.json();
//  return track;
//}

// Alternative with .then chaining
// export function getTracks() {
//   return fetch("/api/tracks")
//     .then((response) => response.json())
//     .then((tracks: APITrack[]) => tracks);
// }

//cfr. fetch on javascript.info

export async function deleteTrack(id: string) {
  await fetch(
    `/api/tracks/${id}`,
    {
      method: "DELETE",
    }
    //const deletedTrack = "track successfully removed";
    //return deletedTrack
  );
}
