import { Router } from "express";
import furnitureController from "./src/controllers/furnitureController.js";

const routes = Router();

routes.use("/data/catalog", furnitureController)

export default routes;