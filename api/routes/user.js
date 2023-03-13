const express = require('express');
const { validateUser, validate } = require('../middlewares/validator');
const router = express.Router();
const { createUser } = require('./../controllers/user');

router.post('/create', validateUser, validate, createUser);

module.exports = router;
