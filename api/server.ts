import { NextFunction, Request, Response } from "express";
import ApiError from "./types/ApiError";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./swagger";
import registerRouter from "./routes/register";

const app = express();
dotenv.config();

// Enable cors
const corsOptions = {
    credentials: true,
    origin: process.env["CLIENT_ORIGIN"] || "http://localhost:8080",
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Serve Swagger UI
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/register", registerRouter);

app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (error: ApiError, _req: Request, res: Response, _next: NextFunction) => {
        const errorCode = error.code || 500;
        const errorMessage = error.message;
        res.status(errorCode).json(errorMessage);
        return;
    }
);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
