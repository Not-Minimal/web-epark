const User = require('../models/user');
const bcrypt = require("bcryptjs");

async function getMe(req, res) {
  const { user_id } = req.user;

  try {
    const response = await User.findById(user_id);
    if (!response) {
      return res.status(400).send({ msg: 'Usuario no encontrado' });
    } else {
      res.status(200).send({ response });
    }
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function getUsers(req, res) {
  const { active } = req.query;
  let response = null;

  try {
    if (active === undefined) {
      response = await User.find();
    } else {
      response = await User.find({ active });
    }
    res.status(200).send({ response });
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function createUser(req, res) {
  const { password } = req.body;
  const user = new User({
    ...req.body,
    active: false,
  });

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  user.password = hashPassword;

  if (req.files && req.files.avatar) {
    // TODO: Process Avatar
    console.log("Procesar Avatar");
  }

  try {
    const userStored = await user.save();
    res.status(200).send({ user: userStored });
  } catch (error) {
    res.status(500).send({ msg: "Error del servidor" });
  }
}

module.exports = { getMe, getUsers, createUser };
