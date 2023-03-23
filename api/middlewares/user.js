const User = require('../model/user');
const ResetToken = require('../model/resetToken');
const { isValidObjectId } = require('mongoose');
const { sendError } = require('../utils/helper');

exports.isResetTokenValid = async (req, res, next) => {
  const { token, id } = req.query;
  if (!token || !id) return sendError(res, 'Invalid request');

  // check if user id is valid
  console.log('ID', id);
  if (!isValidObjectId(id)) return sendError(res, 'Invalid user!');

  const user = await User.findById(id);
  if (!user) return sendError(res, 'User not found!');

  const resetToken = await ResetToken.findOne({ owner: user._id });
  if (!resetToken) return sendError(res, 'No token found');

  const isValid = await resetToken.compareToken(token);
  if (!isValid) return sendError(res, 'Reset token is invalid!');

  // all good, add user object to request

  req.user = user;
  next();
};
