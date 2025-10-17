import { Router } from "express";
import furnitureController from "./src/controllers/furnitureController.js";
import userController from "./src/controllers/userController.js";

const routes = Router();

routes.use("/data/catalog", furnitureController);
routes.use("/users", userController);

export default routes;