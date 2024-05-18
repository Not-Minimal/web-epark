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
  const { active } = req.query;

  try {
    let response = null;
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

async function updateMenu(req, res) {
  const { id } = req.params;
  const menuData = req.body;
  try {
    const updateMenu = await Menu.findByIdAndUpdate({ _id: id }, menuData, { new: true });
    if (!updateMenu) {
      res.status(404).send({ msg: 'Menu no encontrado' });
    } else {
      res.status(200).send({ msg: 'Menu actualizado correctamente', menu: updateMenu });
    }
  } catch (error) {
    res.status(500).send({ msg: 'Error al actualizar el menu' });
  }
}

module.exports = {
  createMenu, getMenus, updateMenu,
};
