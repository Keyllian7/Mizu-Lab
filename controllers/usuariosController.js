const mongoose = require('mongoose');
require("../models/Usuario");
const Usuario = mongoose.model('Usuario');

const listar = async (req, res) => {
    Usuario.find().select('-senha').then((usuarios) =>{
        res.status(200).json({ usuarios })
    })
}

const deletar = async(req, res) => {
    Usuario.deleteOne({_id: req.params.id}).then(() => {
        res.status(200).json({ mensagem: 'Usuário deletado com sucesso!' })
    }).catch((err) => {
        res.status(500).json({ mensagem: 'Aconteceu um erro interno no servidor, tente novamente mais tarde!' })
    })
}

module.exports = { listar, deletar }