import express from "express";

import defineAllowedOrigins from "./defineAllowedOrigins.js";
import registerRoutes from "./registerRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

defineAllowedOrigins(app);
registerRoutes(app);

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
