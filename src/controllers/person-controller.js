const db = require("../models");

async function getPersons(req, res, next) {
  try {
    const persons = await db.Person.find();

    return res.status(200).send({
      persons: persons,
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

async function getPerson(req, res, next) {
  const personId = req.params.id;

  try {
    const person = await db.Person.find({ _id: personId }, { title: 1 });
    return res.status(200).send({
      person: person,
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

async function addPerson(req, res, next) {
  const { name, dateOfBirth, placeOfBirth, roles } = req.body;

  try {
    const { _id } = await db.Person.create({
      name: name,
      dateOfBirth: dateOfBirth,
      placeOfBirth: placeOfBirth,
      roles: roles,
    });

    return res.status(201).send({
      message: "Person created successfully!",
      data: {
        id: _id,
      },
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

async function updatePerson(req, res, next) {
  const personId = req.params.id;

  const { name, dateOfBirth, placeOfBirth, roles } = req.body;

  try {
    const person = await db.Person.findOneAndUpdate({ _id: personId }, {
      $set: {
        name: name,
        dateOfBirth: dateOfBirth,
        placeOfBirth: placeOfBirth,
        roles: roles,
      }
    })
    return res.status(200).send({
      message: "Person updated successfully!",
      person: person,
    });
  } catch (err) {
    return res.status(500).send("error");
  }

}

async function deletePerson(req, res, next) {
  const personId = req.params.id
  console.log(personId);

  try {
    const person = await db.Person.deleteOne({ _id: personId }, { name: 1 });
    return res.status(200).send({
      person: person,
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}


module.exports = {
  getPersons: getPersons,
  getPerson: getPerson,
  addPerson: addPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson,
}