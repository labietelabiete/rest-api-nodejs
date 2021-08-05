const Router = require("express").Router;

const { userController } = require("../controllers");
// const { authMiddleware } = require("../middlewares");
const userRouter = Router();

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

// userRouter.post("/", userController.register);

userRouter.get("/:id", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});


userRouter.post("/", (req, res) => {
  res.status(404).send({
    message: "Post done",
  });
});

userRouter.delete("/:id", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

module.exports = {
  userRouter: userRouter,
};