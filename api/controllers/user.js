const { sendError } = require('../utils/helper');
const User = require('./../model/user');

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
};
