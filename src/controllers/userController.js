import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post("/register", async (req, res) => {
    const userData = req.body;

    const result =  await userService.register(userData.email, userData.password);

    res.status(201).end();
});

userController.post("/login", (req, res) => {
    res.end();
});

userController.get("/logout", (req, res) => {
    res.end();
});

export default userController;