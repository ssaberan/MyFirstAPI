import express from "express";

import { sendResume } from "../middleware/sendResume.js";

const router = express.Router();

router.get("/resumeRetrieval", sendResume);

export const resumeRetrievalRouter = router;
