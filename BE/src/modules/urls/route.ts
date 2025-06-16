import express from "express";
import { createTinyUrl, redirectTinyUrl } from "./controller";

const urlRouter = express.Router();

// GET route to fetch user data
urlRouter.get("/redirect/:id", redirectTinyUrl);

// POST route to create a new user
urlRouter.post("/create", createTinyUrl);

export default urlRouter;
