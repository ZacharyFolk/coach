const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.sendError = (res, error, status = 401) => {
  res.status(status).json({ success: false, error });
};

exports.createRandomBytes = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(30, (err, buff) => {
      if (err) reject(err);
      const token = buff.toString('hex');
      resolve(token);
    });
  });

exports.generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

exports.generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });
};
