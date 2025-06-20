import express from "express";
import {
  createMillionFakeUrls,
  createTinyUrl,
  redirectTinyUrl,
} from "./controller";
import { url } from "inspector";

const urlRouter = express.Router();

// GET route to fetch user data
urlRouter.get("/redirect/:id", redirectTinyUrl);

// POST route to create a new user
urlRouter.post("/create", createTinyUrl);

urlRouter.post("/fake-seeder", createMillionFakeUrls);

export default urlRouter;
