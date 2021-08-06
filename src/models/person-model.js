const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const PersonSchema = Schema(
  {
    name: String,
    dateOfBirth: Date,
    placeOfBirth: String,
    roles: [{
      type: String,
      enum: ['actor', 'actress', 'director', 'camera'],
    }]
  }
);

const Person = mongoose.model("persons", PersonSchema);

module.exports = Person;