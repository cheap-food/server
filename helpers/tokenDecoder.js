const jwt = require('jsonwebtoken');

function decode(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded
}

module.exports = decode