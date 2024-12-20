const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController');
const verificarToken = require('../middlewares/verificarToken')

// Listar usuários
router.get('/listar', verificarToken, usuarioController.listar)

// Deletar usuários por id
router.get('/deletar/:id', verificarToken, usuarioController.deletar)

module.exports = router;