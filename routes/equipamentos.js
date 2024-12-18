const express = require('express');
const router = express.Router();
const equipamentoController = require('../controllers/equipamentosController');
const verificarToken = require('../middlewares/verificarToken')

// Cadastrar equipamento
router.post('/registrar', verificarToken, equipamentoController.registrar)

// Listar equipamentos
router.get('/listar', verificarToken, equipamentoController.listar)

// Deletar equipamentos por id
router.get('/deletar/:id', verificarToken, equipamentoController.deletar)

// Atualizar equipamento por id
router.put('/atualizar/:id', equipamentoController.atualizar)

module.exports = router;