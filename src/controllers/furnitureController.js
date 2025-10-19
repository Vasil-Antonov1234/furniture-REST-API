import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import queristring from "querystring";
import { getErrorMessage } from "../utils/errorUtils.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const query = req.query.where?.replaceAll('"', '');
    let filter = {};

    if (query) {
        filter = queristring.parse(query);
    };

    // const filter = req.url.split("%22").at(1);   
    const furnitures = await furnitureService.getAll(filter);

    res.json(furnitures || []);
});

furnitureController.post("/", async (req, res) => {

    const furnitureData = req.body;
    const ownerId = req.user.id;

    try {
        const furniture = await furnitureService.create(furnitureData, ownerId);
        res.status(201).json(furniture);
    } catch (error) {
        console.log(getErrorMessage(error));
        res.status(400).json({ message: getErrorMessage(error) });
    };
});

furnitureController.get("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;

    try {
        const furniture = await furnitureService.getByiD(furnitureId);
        res.status(200).json(furniture);
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) });
    };
});

furnitureController.put("/:furnitureId", async (req, res) => {
    const furnitureData = req.body;
    const furnitureId = req.params.furnitureId;

    // Todo validate user

    try {
        const furniture = await furnitureService.update(furnitureId, furnitureData);
        res.status(201).json(furniture);
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) });
    };
});

furnitureController.delete("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const userId = req.user.id;

    try {
        const furniture = await furnitureService.delleteById(furnitureId, userId);
        res.json(furniture);
    } catch (error) {
        res.json({ message: getErrorMessage(error) });
    };
    
});

export default furnitureController;