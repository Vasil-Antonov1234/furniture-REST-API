import { Router } from "express";
import User from "../models/User.js";

const userController = Router();

userController.post("/register", async (req, res) => {
    const userData = req.body;

    return User.create(userData);
});

userController.post("/login", (req, res) => {
    res.end();
});

userController.get("/logout", (req, res) => {
    res.end();
});

export default userController;