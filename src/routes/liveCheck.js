import express from "express";

import { sendIsLive } from "../middleware/sendIsLive.js";

const router = express.Router();

router.get("/liveCheck", sendIsLive);

export const liveCheckRouter = router;
