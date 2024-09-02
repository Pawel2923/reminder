import { Request, Response } from "express";
const express = require("express");
const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
