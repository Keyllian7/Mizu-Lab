const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController');

// Listar usuários
router.get('/listar', usuarioController.listar)

// Deletar usuários por id
router.get('/deletar/:id', usuarioController.deletar)

module.exports = router;