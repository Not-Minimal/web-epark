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
  const { page = 1, limit = 10 } = req.query;
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

module.exports = {
  createPost,
  getPosts,
  updatePost,
};
