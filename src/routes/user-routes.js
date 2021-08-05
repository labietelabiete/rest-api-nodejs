const Router = require("express").Router;

const { userController } = require("../controllers");
// const { authMiddleware } = require("../middlewares");
const userRouter = Router();

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getUser);

userRouter.post("/", userController.register);

userRouter.delete("/:id", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  });
});

module.exports = {
  userRouter: userRouter,
};