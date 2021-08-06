const Router = require("express").Router;

const { movieController } = require("../controllers");

const movieRouter = Router();

movieRouter.get("/", movieController.getMovies);

movieRouter.get("/:id", movieController.getMovie);

movieRouter.post("/", movieController.addMovie);

movieRouter.put("/:id", movieController.updateMovie);

module.exports = {
  movieRouter: movieRouter,
};

