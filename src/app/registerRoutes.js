import { liveCheckRouter } from "../routes/liveCheck.js";

const registerRoutes = (app) => {
   app.use("/api", liveCheckRouter);
};

export default registerRoutes;
