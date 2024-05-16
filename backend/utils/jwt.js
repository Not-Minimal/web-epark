const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../constants');

/**
 * La función crea un token de acceso para un usuario con un tiempo de vencimiento específico.
 * @param user - El parámetro `user` en la función `createAccessToken` es un objeto que contiene
 * información sobre el usuario para quien se crea el token de acceso. Probablemente incluya
 * propiedades como `_id` para identificar de forma única al usuario.
 * @returns La función `createAccessToken` devuelve un token web JSON (JWT) que está firmado con una
 * clave secreta (`JWT_SECRET_KEY`). El JWT contiene una carga útil con el tipo de token configurado en
 * "acceso", el ID del usuario (`user._id`), el momento de emisión (`iat`) y el tiempo de vencimiento
 * (`exp`).
 */
function createAccessToken(user) {
  const expToken = new Date();
  expToken.setHours(expToken.getHours() + 3);

  const payload = {
    token_type: "access",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };
  return jwt.sign(payload, JWT_SECRET_KEY);
}

/**
 * La función `createRefreshToken` genera un token de actualización para un usuario con datos de carga
 * específicos y lo firma usando una clave secreta JWT.
 * @param user - El parámetro `user` en la función `createRefreshToken` es un objeto que contiene
 * información sobre el usuario para quien se crea el token de actualización. Probablemente incluya
 * propiedades como `_id` para identificar de forma única al usuario.
 * @returns La función `createRefreshToken(user)` devuelve un token web JSON (JWT) firmado con
 * JWT_SECRET_KEY que contiene la carga útil con token_type como "refresh", user_id como _id del
 * usuario, iat (emitido en) como la marca de tiempo actual y exp. (tiempo de vencimiento) como un mes
 * a partir de la hora actual.
 */
function createRefreshToken(user) {
  const expToken = new Date();
  expToken.setMonth(expToken.getMonth() + 1); // Corrected to setMonth

  const payload = {
    token_type: "refresh",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };
  return jwt.sign(payload, JWT_SECRET_KEY);
}

/**
 * La función `decodedToken` decodifica un token JWT usando una clave secreta.
 * @param token - El parámetro `token` en la función `decodedToken` suele ser un token web JSON (JWT)
 * que debe descodificarse utilizando una clave secreta (`JWT_SECRET_KEY`). La función `jwt.decode` se
 * usa comúnmente para decodificar tokens JWT proporcionando el token y la clave secreta como
 * parámetros.
 * @returns La función `decodedToken` devuelve la información decodificada del token JWT utilizando el
 * método `jwt.decode` con el `JWT_SECRET_KEY` proporcionado.
 */
function decodedToken(token) {
  return jwt.decode(token, JWT_SECRET_KEY, true);
}

module.exports = { createAccessToken, createRefreshToken, decodedToken };