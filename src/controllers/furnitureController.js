import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const furnitures = await furnitureService.getAll();

    res.json(furnitures || []);
});

furnitureController.post("/", async (req, res) => {

    const furnitureData = req.body;

    try {
        const furniture = await furnitureService.create(furnitureData);
        res.status(201).json(furniture);
    } catch (error) {
        return { error: error.message }
    }
});

furnitureController.get("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;

    try {
        const furniture = await furnitureService.getByiD(furnitureId);
        res.status(200).json(furniture);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };

})

export default furnitureController;