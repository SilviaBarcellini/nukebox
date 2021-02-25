// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
//OLD import db from "../../../server/db.json";
import { readDb } from "../../../server/db";

//OLD export default (_req: NextApiRequest, res: NextApiResponse) => {
export default (_req: NextApiRequest, res: NextApiResponse) => {
  const db = await readDb();
  res.status(200).json(db.tracks);
};
