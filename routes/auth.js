const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../models/Usuario");
const Usuario = mongoose.model('Usuario');
const bcrypt = require('bcrypt');
const authController = require('../controllers/authController');

// Rota de registro
router.post('/registrar', authController.registrar)

// Rota de login
router.post('/login', authController.login)

module.exports = router;