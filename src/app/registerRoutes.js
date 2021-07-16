import { helloWorldRouter } from "../routes/helloWorld.js";

const registerRoutes = (app) => {
   app.use("/api/", helloWorldRouter);
};

export default registerRoutes;
