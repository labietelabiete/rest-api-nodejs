const db = require("../models");

async function getMovies(req, res, next) {
  try {
    const movies = await db.Movie.find();

    return res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

async function getMovie(req, res, next) {
  const movieId = req.params.id;

  try {
    const movie = await db.Movie.find({ _id: movieId }, { title: 1 });
    return res.status(200).send({
      movie: movie,
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

async function addMovie(req, res, next) {
  const { title, releaseYear, genres, duration, cast } = req.body;

  try {
    const { _id } = await db.Movie.create({
      title: title,
      releaseYear: releaseYear,
      genres: genres,
      duration: duration,
      cast: cast,
    });

    return res.status(201).send({
      message: "Movie created successfully!",
      data: {
        id: _id,
      },
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

async function updateMovie(req, res, next) {
  const movieId = req.params.id;

  const { title, releaseYear, genres, duration, cast } = req.body;

  try {
    const movie = await db.Movie.findOneAndUpdate({ _id: movieId }, {
      $set: {
        title: title,
        releaseYear: releaseYear,
        genres: genres,
        duration: duration,
        cast: cast,
      }
    })
    return res.status(200).send({
      message: "Movie updated successfully!",
      movie: movie,
    });
  } catch (err) {
    return res.status(500).send("error");
  }

}

module.exports = {
  getMovies: getMovies,
  getMovie: getMovie,
  addMovie: addMovie,
  updateMovie: updateMovie,
}