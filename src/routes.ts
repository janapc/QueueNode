import express from "express";

import UserController from "./controllers/UserController";

const routes = express.Router();

const userController = new UserController();

routes.post("/user", userController.create);

export default routes;
