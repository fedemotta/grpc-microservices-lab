/* eslint-disable import/named */
/* eslint-disable import/extensions */
const express = require('express');

const { getUsers } = require('../controllers/users.js');

const router = express.Router();

router.get('/', getUsers);

module.exports = router;
