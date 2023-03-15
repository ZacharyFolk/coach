const { sendError, createRandomBytes } = require('../utils/helper');
const User = require('./../model/user');
const jwt = require('jsonwebtoken');
const {
  generateOTP,
  mailTransport,
  validateEmailTemplate,
  confirmationEmailTemplate,
  generatePasswordResetTemplate,
} = require('../utils/mail');
const VerificationToken = require('../model/verificationToken');
const { isValidObjectId } = require('mongoose');
const ResetToken = require('../model/resetToken');
const crypto = require('crypto');
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

  // random number
  const OTP = generateOTP();
  const vt = new VerificationToken({
    owner: newUser._id,
    token: OTP,
  });
  await vt.save();
  await newUser.save();

  mailTransport().sendMail({
    from: 'emailverification@email.com',
    to: newUser.email,
    subject: 'Verify your email account',
    html: validateEmailTemplate(OTP),
  });

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

exports.verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;
  console.log(userId);
  if (!userId || !otp.trim())
    return sendError(res, 'Invalid request, missing parameters!');

  if (!isValidObjectId(userId)) return sendError(res, 'Invalid user id!');

  const user = await User.findById(userId);

  if (!user) return sendError(res, 'User not found!');
  if (user.verified) return sendError(res, 'This account is already verified!');

  const token = await VerificationToken.findOne({ owner: user._id });
  if (!token) return sendError(res, 'Sorry, token not found!');

  const isMatched = await token.compareToken(otp);
  if (!isMatched) return sendError(res, 'Please provide a valide token!');

  // passed all the tests
  user.verified = true;
  // delete token from db
  await VerificationToken.findByIdAndDelete(token._id);
  await user.save();

  //  validation success - welcome email
  mailTransport().sendMail({
    from: 'emailverification@email.com',
    to: user.email,
    subject: 'Welcome email',
    html: confirmationEmailTemplate('Email verified!', 'This is my message'),
  });

  res.json({
    success: true,
    message: 'Email verified!',
    user: { name: user.name, email: user.email, id: user.__id },
  });
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return sendError(res, 'Please provide a valid email.');

  const user = await User.findOne({ email });
  if (!user) return sendError(res, 'User not found, invalid request!');

  const token = await ResetToken.findOne({ owner: user._id });
  //  see model , token resets in 1 hour - expires: 3600,
  console.log('Forgot Password : token from ResetToken model', token);
  if (token) return sendError(res, 'Only one request per hour.');

  // no token, generate a new one

  const randoBytes = await createRandomBytes();
  const resetToken = new ResetToken({ owner: user._id, token: randoBytes });
  await resetToken.save();

  // reset password email
  mailTransport().sendMail({
    from: 'security@email.com',
    to: user.email,
    subject: 'Password Reset',
    html: generatePasswordResetTemplate(
      `http://localhost:3000/reset-password?token=${randoBytes}&id=${user._id}`
    ),
  });

  res.json({
    success: true,
    message: 'Password reset link has been sent to your registered email.',
  });
};
