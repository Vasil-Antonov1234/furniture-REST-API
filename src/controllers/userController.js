import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post("/register", async (req, res) => {
    const userData = req.body;

    const result = await userService.register(userData.email, userData.password);

    res.status(201).json(result);
});

userController.post("/login", async (req, res) => {
    const userData = req.body;

    try {
        const result = await userService.login(userData.email, userData.password);

        res.status(201).json(result);
    } catch (error) {
        // Extract error message
        res.status(401).json({message: error.message});
    }

    res.end();
});

userController.get("/logout", (req, res) => {
    
    res.status(204).json({ok: true});
});

export default userController;