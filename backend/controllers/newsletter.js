const { get } = require('mongoose');
const Newsletter = require('../models/newsletter');

// Functions


async function suscribeEmail(req, res) {
  const { email } = req.body;

  try {
    // Verificar si el email ya está registrado
    const existingEmail = await Newsletter.findOne({ email: email.toLowerCase() });
    if (existingEmail) {
      return res.status(400).send({ code: 400, message: 'El email ya existe.' });
    }

    // Si no existe, crear uno nuevo
    const newsletter = new Newsletter({
      email: email.toLowerCase(),
    });
    const emailStored = await newsletter.save();
    res.status(200).send({ email: emailStored, message: 'Email registrado correctamente.' });
  } catch (error) {
    res.status(500).send({ code: 500, message: 'Error en el servidor.' });
  }
}

async function getEmails(req, res) {

  const { page = 1, limit = 10 } = req.query;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  }
  try {
    const emails = await Newsletter.paginate({}, options);
    if (!emails) {
      res.status(404).send({ code: 404, message: 'No se encontraron emails.' });
    } else {
      res.status(200).send({ code: 200, emails });
    }
  } catch (error) {
    res.status(500).send({ code: 500, message: 'Error en el servidor.' });
  }

}
async function deleteEmail(req, res) {
  const { id } = req.params;
  try {
    const emailDeleted = await Newsletter.findByIdAndDelete(id);
    if (!emailDeleted) {
      res.status(404).send({ code: 404, message: 'Email no encontrado.' });
    } else {
      res.status(200).send({ code: 200, message: 'Email eliminado correctamente.' });
    }
  } catch (error) {
    res.status(500).send({ code: 500, message: 'Error en el servidor.' });
  }
};

module.exports = {
  suscribeEmail,
  getEmails,
  deleteEmail,
};