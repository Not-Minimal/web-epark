const Menu = require('../models/menu');

/**
 * Crea un nuevo menú y lo guarda en la base de datos.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
async function createMenu(req, res) {
  const menu = new Menu(req.body);

  try {
    const menuStored = await menu.save();
    res.status(200).send({ menu: menuStored });
  } catch (error) {
    res.status(400).send({ message: 'Error al crear menú.' });
  }
}

async function getMenus(req, res) {
  const { active } = req.body;

  try {
    if (active === undefined) {
      response = await Menu.find().sort({ order: 'asc' });
    } else {
      response = await Menu.find({ active }).sort({ order: 'asc' });
    }
    res.status(200).send({ response });
  } catch (error) {
    res.status(500).send({ msg: 'No se encuentra el menu' });
  }

}

module.exports = {
  createMenu, getMenus
};
