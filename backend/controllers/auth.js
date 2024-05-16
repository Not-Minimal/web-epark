function register(request, response) {
  console.log("Se ha ejecutado el registros");

  response.status(200).send({ msg: "Todo OK" });
}

module.exports = { register };