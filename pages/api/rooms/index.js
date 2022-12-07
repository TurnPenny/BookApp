import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { getAllRooms, newRoom } from "../../../controllers/roomsController";

const handler = nc();
dbConnect();

handler.get(getAllRooms);

handler.post(newRoom);

export default handler;
