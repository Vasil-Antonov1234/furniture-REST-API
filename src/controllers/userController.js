import { Router } from "express";

const userController = Router();

userController.put("/register", (req, res) => {
    res.end();
});

userController.put("/login", (req, res) => {
    res.end();
});

userController.get("/logout", (req, res) => {
    res.end();
});

export default userController;