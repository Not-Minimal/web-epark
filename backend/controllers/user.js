async function getMe(request, response) {
  response.status(200).send({ msg: 'OK' });
}

module.exports = { getMe };