import express from "express";
import cors from "cors";
import routes from "../routes.js";
import mongoose from "mongoose";

const app = express();

// Setup mongoose
try {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "furniture"
    });

    console.log("Succesfully connected to DB!");
} catch (error) {
    console.error("Cannot connext to DB!");
    console.error(error.message);
}

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