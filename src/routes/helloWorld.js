import express from "express";

import { helloWorld } from "../middleware/helloWorld.js";

const router = express.Router();

router.get("/helloWorld", helloWorld);

export const helloWorldRouter = router;
