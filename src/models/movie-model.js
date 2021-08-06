const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MovieSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Movie title is required"],
    },
    releaseYear: Number,
    genres: [String],
    duration: Number,
    cast: {
      type: [String],
      default: undefined,
      required: true
    },
    roles: [{
      type: String,
      enum: ['actor', 'actress', 'director', 'camera'],
      required: true,
    }]
  }
);

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;