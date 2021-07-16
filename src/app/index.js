import express from "express";

import registerRoutes from "./registerRoutes.js";

const app = express();
const PORT = 4000;

registerRoutes(app);

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
