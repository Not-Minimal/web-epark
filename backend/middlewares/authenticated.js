const jwt = require("../utils/jwt");

function asureAuth(request, response, next) {
  if (!request.headers.authorization) {
    return response.status(403).send({ msg: 'No tienes autorización' });
  }

  const token = request.headers.authorization.replace("Bearer ", "");

  try {
    const payload = jwt.decodedToken(token);

    const { exp } = payload;
    const currentDate = new Date().getTime();

    if (exp <= currentDate) {
      return response.status(400).send({ msg: 'Token expirado' });
    }

    request.user = payload;
    next();
  } catch (error) {
    return response.status(400).send({ msg: 'Token inválido' });
  }
}

module.exports = {
  asureAuth,
};
