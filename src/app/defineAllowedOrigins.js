import cors from "cors";

const defineAllowedOrigins = (app) => {
   app.use(
      cors({
         // TODO: define allowed origins
         origin: "*",
      })
   );
};

export default defineAllowedOrigins;
