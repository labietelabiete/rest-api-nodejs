const express = require('express');
// Helpet for protecting headers
const helmet = require('helmet');
// For being able to work with json
const { json } = require('body-parser');
const morgan = require("morgan");


const { userRouter } = require("./routes/user-routes");
const { movieRouter } = require("./routes/movie-routes");
const { personRouter } = require("./routes/person-routes");

const app = express();

app.use(helmet());
app.use(json());
app.use(morgan("dev"));


// All request from useRouter, use always this endpoint for the beggining
app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use("/persons", personRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World",
  })
});

module.exports = app;