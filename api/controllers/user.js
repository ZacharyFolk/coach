const { sendError } = require('../utils/helper');
const User = require('./../model/user');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  console.log('user ', user);

  if (user) {
    return sendError(res, 'This email already exists!');
  }
  const newUser = new User({
    name,
    email,
    password,
  });

  await newUser.save();
  console.log('User saved');
  res.send(newUser);
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email.trim() || !password.trim())
    return sendError(res, 'Email/Password is missing!');

  const user = await User.findOne({ email });
  if (!user) return sendError(res, 'User not found!');

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return sendError(res, 'email/password do not match');

  // passed all checks create a token for user

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({
    success: true,
    user: { name: user.name, email: user.email, id: user._id, token: token },
  });
};
