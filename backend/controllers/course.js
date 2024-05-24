const e = require('express');
const Course = require('../models/course')
const image = require('../utils/image')


// Functions

/**
 * La función `createCourse` crea un nuevo curso con una imagen en miniatura y lo guarda en la base de
 * datos, manejando cualquier error que pueda ocurrir.
 * @param req - El parámetro `req` normalmente representa el objeto de solicitud en las aplicaciones
 * Node.js. Contiene información sobre la solicitud HTTP que activó la función, como encabezados,
 * parámetros, cuerpo y archivos de la solicitud. En este contexto, `req` se utiliza para acceder al
 * cuerpo de la solicitud y a los archivos para crear un nuevo curso.
 * @param res - El parámetro `res` en la función `createCourse` es el objeto de respuesta que se
 * utilizará para enviar una respuesta al cliente que realiza la solicitud. Normalmente se utiliza para
 * enviar respuestas HTTP con datos o códigos de estado. En este caso, la función está enviando una
 * respuesta con el curso almacenado.
 */
async function createCourse(req, res) {

  const course = new Course(req.body);

  const imagePath = image.getFilePath(req.files.miniature);
  course.miniature = imagePath;

  try {
    const courseStored = await course.save();
    res.status(200).send({ courseStored });

  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}
async function getCourse(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  try {
    const courses = await Course.paginate({}, options);
    res.status(200).send({ courses });
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}

async function updateCourse(req, res) {
  const { id } = req.params;
  const courseData = req.body;

  if (req.files.miniature) {
    const imagePath = image.getFilePath(req.files.miniature);
    courseData.miniature = imagePath;
  }

  try {
    await Course.findByIdAndUpdate({ _id: id }, courseData);
    res.status(200).send({ msg: 'Curso actualizado' });
  } catch (error) {
    res.status(500).send({ msg: 'Error del servidor' });
  }
}


async function deleteCourse(req, res) {
  const { id } = req.params;

  try {
    const courseDeleted = await Course.findByIdAndDelete(id);
    if (!courseDeleted) {
      res.status(404).send({ msg: "Curso no encontrado" });
    } else {
      res.status(200).send({ msg: "Curso eliminado correctamente" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error del servidor" });
  }
}

module.exports = {
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
};