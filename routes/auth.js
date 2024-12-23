const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
require("../swagger/auth.swagger")

// Rota de registro
router.post('/registrar', authController.registrar)

// Rota de login
router.post('/login', authController.login)

module.exports = router;