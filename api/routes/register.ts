import { NextFunction, Request, Response } from "express";

import express from "express";
import registerService from "../services/registerService";
import User from "../models/User";

const router = express.Router();
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
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        type: string
 *        example: User registration failed
 */
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User = req.body;

        const uid = user.uid;
        const email = user.email as string;
        const passwordHash = user.passwordHash as string;

        const message = await registerService.registerWithEmailAndPassword(
            uid,
            email,
            passwordHash
        );

        res.status(201).json({ message });
    } catch (error) {
        next(error);
    }
});

export default router;

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
