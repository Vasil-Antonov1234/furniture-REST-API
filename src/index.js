import express from "express";
import cors from "cors";
import routes from "../routes.js";

const app = express();

// Add CORS
app.use(cors());

// Add json parser
app.use(express.json());

app.get("/", (req, res) => {
    res.send([]);
});

// Add routes
app.use(routes);

app.listen(3030, () => console.log("Server is listening on http://localhost:3030..."));