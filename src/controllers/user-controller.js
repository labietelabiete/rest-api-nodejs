const db = require("../models");

async function register(req, res, next) {
  const { name, surname, email, password } = req.body;

  try {
    const { _id } = await db.User.create({
      name: name,
      surname: surname,
      email: email,
      password: password,
    });

    return res.status(201).send({
      message: "User created successfully!",
      data: {
        id: _id,
      },
    });
  } catch (err) {
    return res.status(500).send({
      message: "Error creating user",
      error: err,
    });
  }
}

async function signIn(req, res, next) { }

async function getUser(req, res, next) {
  const userId = req.params.id

  try {
    const user = await db.User.find({ _id: userId }, { name: 1 });
    return res.status(200).send({
      user: user,
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await db.User.find();
    // Para paginacion
    // const users = await db.User.find().limit(10).offset(2);

    return res.status(200).send({
      users: users,
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

async function deleteUser(req, res, next) {
  const userId = req.params.id

  try {
    const user = await db.User.deleteOne({ _id: userId }, { name: 1 });
    return res.status(200).send({
      user: user,
    });
  } catch (err) {
    return res.status(500).send("error");
  }
}

module.exports = {
  register: register,
  signIn: signIn,
  getUser: getUser,
  getUsers: getUsers,
  deleteUser: deleteUser,
};