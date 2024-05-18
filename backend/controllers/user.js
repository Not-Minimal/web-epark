const User = require('../models/user');
const bcrypt = require("bcryptjs");
const image = require('../utils/image');

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
  // Extrae la contraseña del cuerpo de la solicitud
  const { password } = req.body;
  // Crea una nueva instancia de usuario con los datos proporcionados
  const user = new User({
    ...req.body,
    active: false, // Inicialmente, el usuario no está activo
  });
  // Genera una sal para el hash de la contraseña
  const salt = bcrypt.genSaltSync(10);
  // Genera el hash de la contraseña
  const hashPassword = bcrypt.hashSync(password, salt);
  // Asigna la contraseña hasheada al usuario
  user.password = hashPassword;
  // Si hay un archivo de avatar en la solicitud, procesa el avatar
  if (req.files && req.files.avatar) {
    const imagePath = image.getFilePath(req.files.avatar);
    user.avatar = imagePath;

  }

  try {
    // Guarda el usuario en la base de datos
    const userStored = await user.save();

    // Envía una respuesta de éxito con el usuario almacenado
    res.status(200).send({ user: userStored });
  } catch (error) {
    // En caso de error, envía una respuesta de error del servidor
    res.status(500).send({ msg: "Error del servidor / el correo debe ser unico" });
  }
}
/**
 * Actualiza un usuario existente en la base de datos.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
async function updateUser(req, res) {
  const { id } = req.params;
  const userData = req.body;

  if (userData.password) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(userData.password, salt);
    userData.password = hashPassword;
  } else {
    delete userData.password;
  }

  if (req.files && req.files.avatar) {
    const imagePath = image.getFilePath(req.files.avatar);
    userData.avatar = imagePath;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });
    if (!updatedUser) {
      res.status(404).send({ msg: "Usuario no encontrado" });
    } else {
      res.status(200).send({ msg: "Usuario actualizado correctamente", user: updatedUser });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error al actualizar el usuario" });
  }
}

module.exports = { getMe, getUsers, createUser, updateUser };