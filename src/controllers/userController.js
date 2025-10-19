import { Router } from "express";
import userService from "../services/userService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

userController.post("/register", async (req, res) => {
    const userData = req.body;

    try {
        const result = await userService.register(userData.email, userData.password);
        
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) });
    };
});

userController.post("/login", async (req, res) => {
    const userData = req.body;

    try {
        const result = await userService.login(userData.email, userData.password);

        res.status(201).json(result);
    } catch (error) {
        res.status(401).json({ message: getErrorMessage(error) });
    }
});

userController.get("/logout", (req, res) => {

    res.status(204).json({ ok: true });
});

export default userController;