import express from "express";
import cors from "cors";
import furnitureController from "./controllers/furnitureController.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send([]);
});
app.use(furnitureController);

app.listen(3030, () => console.log("Server is listening on http://localhost:3030..."));