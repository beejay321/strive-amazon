import express from "express";
import models from "../../db/index.js";
const User = models.User;
const Post = models.Post;

const usersRouter = express.Router();

/****************POST BLOGPOSTS******************/

usersRouter.post("/", async (req, res, next) => {
  try {
    const data = await User.create(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.get("/", async (req, res, next) => {
  try {
    const data = await User.findAll({
      // attributes: ["name", "surname", "avatar"],
    });

    res.send(data);
  } catch (error) {
    console.log(error);
    res.send({ error: error.message });

    // next(error);
  }
});

usersRouter.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default usersRouter;
