const Router = require('express').Router;

const userRouter = Router();

// In server.js we have already specified the beggining of the endpoint as /user
userRouter.get("/", (req, res) => {

});

userRouter.get("/:id", (req, res) => {

});

userRouter.post("/:", (req, res) => {

});

userRouter.patch("/", (req, res) => {

});

userRouter.delete("/:id", (req, res) => {

});

module.exports = {
  userRouter: userRouter,
}