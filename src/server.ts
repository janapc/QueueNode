require("dotenv").config();

import express from "express";
import BullBoard from "bull-board";

import routes from "./routes";
import Queue from "./services/Queue";

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());
app.use(routes);
app.use("/admin/queues", BullBoard.UI);

app.listen(3333, () => console.log("Server running on localhost:3333"));
