const express = require('express');
const { isResetTokenValid } = require('../middlewares/user');
const { validateUser, validate } = require('../middlewares/validator');
const router = express.Router();
const {
  createUser,
  signin,
  verifyEmail,
  forgotPassword,
  resetPassword,
  validateAuthToken,
  refreshToken,
} = require('./../controllers/user');
router.post('/create', validateUser, validate, createUser);
router.post('/signin', signin);
router.post('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', isResetTokenValid, resetPassword);
// for email verification
router.get('/verify-token', isResetTokenValid, (req, res) => {
  res.json({ success: true });
});
// main token auth
router.get('/validate-auth', validateAuthToken);
router.post('/refresh-token', refreshToken);

module.exports = router;
