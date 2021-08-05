const Router = require("express").Router;

const { userController } = require("../controllers");
// const { authMiddleware } = require("../middlewares");
const userRouter = Router();

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getUser);

userRouter.post("/", userController.register);

userRouter.delete("/:id", userController.deleteUser);

module.exports = {
  userRouter: userRouter,
};