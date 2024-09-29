import { NextFunction, Request, Response } from "express";

const express = require("express");
const router = express.Router();
const registerService = require("../services/registerService");

/**
 * @openapi
 * /register:
 *  post:
 *   tags:
 *    - Accounts
 *   summary:
 *    Register new user using email and password
 *   parameters:
 *    - name: user
 *      in: body
 *      description: user object containing uid, email and password properties
 *      type: User
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    201:
 *     description: User registration success
 *    500:
 *     description: Internal server error
 */
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

/**
 * @openapi
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *     uid:
 *      type: string
 *      required: true
 *     username:
 *      type: string
 *      required: true
 *     email:
 *      type: string
 *     password:
 *      type: string
 *     created_at:
 *      type: string
 *      format: date-time
 */
