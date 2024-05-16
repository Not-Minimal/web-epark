const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function register(request, response) {
  const { firstname, lastname, email, password } = request.body;

  if (!email) response.status(400).send({ msg: "El email es obligatorio" });
  if (!password) response.status(400).send({ msg: "La contraseña es obligatoria" });

  const user = new User({
    firstname,
    lastname,
    email: email.toLowerCase(),
    role: "user",
    active: false,
  });

  const salt = bcrypt.genSaltSync(10);
  const hashpassword = bcrypt.hashSync(password, salt);
  user.password = hashpassword;

  try {
    const userStorage = await user.save();
    response.status(200).send({ user: userStorage });
  } catch (error) {
    response.status(400).send({ msg: "Error al guardar el usuario" });
  }
}

module.exports = { register };
