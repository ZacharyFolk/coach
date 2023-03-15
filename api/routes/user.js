const express = require('express');
const { validateUser, validate } = require('../middlewares/validator');
const router = express.Router();
const {
  createUser,
  signin,
  verifyEmail,
  forgotPassword,
} = require('./../controllers/user');
router.post('/create', validateUser, validate, createUser);
router.post('/signin', signin);
router.post('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);

module.exports = router;
