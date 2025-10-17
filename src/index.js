import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("test")
})

app.listen(3030, () => console.log("Server is listening on http://localhost:3030..."));