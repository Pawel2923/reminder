import { NextFunction, Request, Response } from "express";

const express = require("express");
const router = express.Router();
const registerService = require("../services/registerService");

// Register new user with email and password
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User = req.body;

        const uid = user.uid;
        const email = user.email as string;
        const password = user.password as string;

        // registration service
        const message = await registerService.registerWithEmailAndPassword(
            uid,
            email,
            password
        );

        res.status(201).json({ message });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
