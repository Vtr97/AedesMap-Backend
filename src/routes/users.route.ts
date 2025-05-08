import express from "express";
import { newUser } from "../controllers/users.controller";

const usersRouter = express.Router();

usersRouter.post("/",newUser);

export default usersRouter;