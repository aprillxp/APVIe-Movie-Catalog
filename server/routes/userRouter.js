const express = require("express");
const UserController = require("../controllers/userController");
const userRouter = express.Router();

// user get data movies
userRouter.get("/movies", UserController.getUserMovies);
userRouter.get("/movies/:id", UserController.getOneUserMovies);

module.exports = userRouter;
