const db = require("../models");

async function seedUsers() {
  await db.User.insertMany([
    {
      "name": "Hugo",
      "surname": "Gomez",
      "email": "hugo@example.com",
      "password": "hola"
    },
    {
      "name": "Mario",
      "surname": "Gomez",
      "email": "mario@example.com",
      "password": "hola"
    },
  ]);
}

async function seedMovies() {
  await db.Movie.insertMany([
    {
      "title": "The Mask",
      "releaseYear": 1994,
      "genres": ["Comedy"],
      "duration": 101,
      "cast": ["Jim Carrey", "Cameron Diaz", "Peter Greene"],
    },
    {
      "title": "Little Warriors",
      "releaseYear": 1998,
      "genres": ["Action", "Kids"],
      "duration": 110,
      "cast": ["Bruce Dern", "Ernest Borgnine", "Frank Langella"],
    },
    {
      "title": "Space Jam",
      "releaseYear": 1996,
      "genres": ["Animation", "Comedy", "Sports"],
      "duration": 88,
      "cast": ["Michael Jordan", "Wayne Knight", "Theresa Randle"],
    },
    {
      "title": "Space Jam: A New Legacy",
      "releaseYear": 2021,
      "genres": ["Animation", "Comedy", "Sports"],
      "duration": 115,
      "cast": ["Lebron James", "Sonequa Martin-Green", "Don Cheadle"],
    },
    {
      "title": "The Lion King",
      "releaseYear": 1994,
      "genres": ["Animation", "Kids"],
      "duration": 118,
      "cast": ["Donald Glover", "Seth Rogen", "Chiwetel Ejiofor"],
    },
    {
      "title": "Harry Potter and the Chamber of Secrets",
      "releaseYear": 2002,
      "genres": ["Animation", "Kids", "Adventures"],
      "duration": 161,
      "cast": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },
    {
      "title": "Harry Potter and the Chamber of Secrets",
      "releaseYear": 2002,
      "genres": ["Animation", "Kids", "Adventures"],
      "duration": 161,
      "cast": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },
    {
      "title": "Harry Potter and the Prisoner of Azkaban",
      "releaseYear": 2004,
      "genres": ["Animation", "Kids", "Adventures"],
      "duration": 141,
      "cast": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    },
  ]);
}


async function seedPersons() {
  await db.persons.insertOne(
    {
      "name": "Michael Jordan",
      "dateOfBirth": new Date(1963 - 02 - 17),
      "placeOfBirth": "New York",
      "roles": ["actor"],
    }
  );
}