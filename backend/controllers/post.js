// controllers/postController.js

const Post = require('../models/post');
const image = require('../utils/image');

async function createPost(req, res) {
  const post = new Post(req.body);
  post.created_at = new Date();
  const imagePath = image.getFilePath(req.files.miniature);
  post.miniature = imagePath;

  try {
    const postStored = await post.save();
    // Envía una respuesta de éxito con el usuario almacenado
    res.status(200).send({ post: postStored });
  } catch (error) {
    // En caso de error, envía una respuesta de error del servidor
    res.status(500).send({ msg: "Error del servidor" });
  }
}

async function getPosts(req, res) {
  const { page = 1, limit = 10 } = req.params;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    sort: { created_at: 'desc' },
  };

  try {
    const postsStored = await Post.paginate({}, options);
    res.status(200).send(postsStored);
  } catch (error) {
    res.status(400).send({ msg: "Error al obtener Posts" });
  }
}

/**
 * La función `updatePost` actualiza una publicación en una base de datos según los datos de solicitud
 * proporcionados y responde con mensajes de éxito o error.
 * @param req - El parámetro `req` en la función `updatePost` es el objeto de solicitud que contiene
 * información sobre la solicitud HTTP realizada al servidor. Incluye detalles como encabezados de
 * solicitud, parámetros, cuerpo y archivos cargados como parte de la solicitud. En esta función, `req`
 * se utiliza para acceder
 * @param res - El parámetro `res` en la función `updatePost` es el objeto de respuesta que se utiliza
 * para enviar una respuesta al cliente que realiza la solicitud. En esta función, se utiliza para
 * enviar diferentes códigos de estado y mensajes según el resultado de la actualización de una
 * publicación en la base de datos. la `resolución
 */
async function updatePost(req, res) {
  const { id } = req.params;
  const postData = req.body;

  if (req.files.miniature) {
    const imagePath = image.getFilePath(req.files.miniature);
    postData.miniature = imagePath;
  }
  try {
    const updatePost = await Post.findByIdAndUpdate(id, postData, { new: true });
    if (!updatePost) {
      res.status(404).send({ msg: "Post no encontrado" });
    } else {
      res.status(200).send({ msg: "Post actualizado correctamente", post: updatePost });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error al actualizar el Post" });
  }
}
async function deletePost(req, res) {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      res.status(404).send({ msg: "Post no encontrado" });
    } else {
      res.status(200).send({ msg: "Post eliminado correctamente" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error al eliminar el Post" });
  }
}

async function getPost(req, res) {
  const { path } = req.params;
  try {
    const postStored = await Post.findOne({ path });
    if (!postStored) {
      res.status(404).send({ msg: "Post no encontrado" });
    } else {
      res.status(200).send({ post: postStored });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error del servidor" });
  }
}



module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getPost,
};
