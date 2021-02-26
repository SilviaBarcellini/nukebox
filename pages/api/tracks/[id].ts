// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { write } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
/* import db from "../../../server/db.json"; */
import { readDb, writeDb } from "../../../server/db";

//export default (req: NextApiRequest, res: NextApiResponse) => {
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  //const track = db.tracks.find((track) => track.id === id);
  //if (!track) {
  //  return res.status(404).json({
  //    status: 404,
  //    error: "Track not found",
  if (req.method === "GET") {
    const db = await readDb();
    const track = db.tracks.find((track) => track.id === id);
    if (!track) {
      return res.status(404).json({
        status: 404,
        error: "Track not found!!",
      });
    }
    return res.status(200).json(track);
  }
  if (req.method === "DELETE") {
    const db = await readDb();
    db.tracks = db.tracks.filter((track) => track.id !== id);
    await writeDb(db);
    return res.status(200).json({
      status: 200,
      message: `${id} deleted!!`,
    });
  }
  //res.status(200).json(track);
  return res.status(405).end();
};
