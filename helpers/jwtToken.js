const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtToken(object) {
  return jwt.sign(object, process.env.JWT_SECRET);
}

module.exports = jwtToken;