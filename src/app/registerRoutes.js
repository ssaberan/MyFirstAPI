import { liveCheckRouter } from "../routes/liveCheck.js";
import { resumeRetrievalRouter } from "../routes/resumeRetrieval.js";

const registerRoutes = (app) => {
   app.use("/api", liveCheckRouter);
   app.use("/api", resumeRetrievalRouter);
};

export default registerRoutes;
