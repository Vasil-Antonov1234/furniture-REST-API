import { Router } from "express";

const furnitureController = Router();

furnitureController.get("/data/catalog", (req, res) => {
    res.json([]);
})

export default furnitureController;