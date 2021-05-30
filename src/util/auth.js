const jwt = require("jsonwebtoken");

// All the operation are synchronous

const sign = (data) => {
  return jwt.sign(data, process.env.JWT_PRIVATE_KEY, {
    expiresIn: 60 * 60 * 60,
  });
};

const verify = (token) => {
  return jwt.verify(token, process.env.JWT_PRIVATE_KEY);
};

module.exports = {
  sign,
  verify,
};
