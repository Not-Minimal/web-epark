const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const { decodedToken, createAccessToken } = require('../utils/jwt');


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
    const userStore = await user.save();
    response.status(200).send({ user: userStore });
  } catch (error) {
    response.status(400).send({ msg: "Error al guardar el usuario" });
  }
}
async function login(request, response) {
  const { email, password } = request.body;
  if (!email) response.status(400).send({ msg: "El email es obligatorio" });
  if (!password) response.status(400).send({ msg: "La contraseña es obligatoria" });

  const emailLowerCase = email.toLowerCase();

  try {
    const userStore = await User.findOne({ email: emailLowerCase });
    if (!userStore) {
      response.status(404).send({ msg: "El usuario no existe" });
      return;
      console.log("Password:" + password);
      console.log(userStore);
    }
    console.log("Password:" + password);
    console.log(userStore);

    const passwordIsValid = bcrypt.compareSync(password, userStore.password);
    if (!passwordIsValid) {
      response.status(401).send({ msg: "Contraseña incorrecta" });
      return;
      console.log("Password:" + password);
      console.log(userStore);
    } else if (!userStore.active) {
      response.status(401).send({ msg: "El usuario no está activo" });
      return;
      console.log("");
    }
    console.log("Password:" + password);
    console.log(userStore);

    const accessToken = jwt.createAccessToken(userStore);
    const refreshToken = jwt.createRefreshToken(userStore);
    response.status(200).send({
      accessToken: jwt.createAccessToken(userStore),
      refreshToken: jwt.createRefreshToken(userStore),
    });

  } catch (error) {
    response.status(500).send({ msg: "Error del servidor" });
  }
}
async function refreshAccessToken(request, response) {
  const { token } = request.body;
  console.log("Refresh Token:", token); // Add this line for debugging
  if (!token) {
    response.status(404).send({ msg: "No se ha encontrado el token" });
    return; // Ensure to return after sending the response
  }
  const decodedTokenResult = jwt.decodedToken(token);
  console.log("Decoded Token Result:", decodedTokenResult); // Add this line for debugging
  if (!decodedTokenResult) {
    response.status(400).send({ msg: "Token inválido" });
    return; // Ensure to return after sending the response
  }
  const { user_id } = decodedTokenResult;
  console.log("User ID:", user_id); // Add this line for debugging
  try {
    const userStore = await User.findOne({ _id: user_id });
    if (!userStore) {
      response.status(404).send({ msg: "El usuario no existe" });
    } else {
      response.status(200).send({
        accessToken: jwt.createAccessToken(userStore),
      });
    }
  } catch (error) {
    response.status(500).send({ msg: "Error del servidor" });
  }
}




module.exports = { register, login, refreshAccessToken };
