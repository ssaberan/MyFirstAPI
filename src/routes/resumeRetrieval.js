import express from "express";

import { sendHtmlStringResume } from "../middleware/sendHtmlStringResume.js";
import { sendPdfResume } from "../middleware/sendPdfResume.js";

const router = express.Router();

router.get("/htmlStringResume", sendHtmlStringResume);
router.get("/pdfResume", sendPdfResume);

export const resumeRetrievalRouter = router;
