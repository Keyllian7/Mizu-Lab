const mongoose = require('mongoose');
require('../models/Equipamento');
const Equipamento = mongoose.model('equipamentos');

const registrar = async (req, res) => {
    const {
        tag, ultima_calibracao, proxima_calibracao,
        norma, ensaio, metodo, teste, fabricante,
        modelo, serie, capacidade, ponto_calibracao,
        tolerancia, periocidade, procedimento, registro, observacoes
    } = req.body;
    if (!tag || !ultima_calibracao || !proxima_calibracao || !norma || !ensaio || 
        !metodo || !teste || !fabricante || !modelo || !serie || !capacidade || 
        !ponto_calibracao || !tolerancia || !periocidade || !procedimento || !registro || !observacoes) {
        return res.status(422).json({ mensagem: 'Preencha todos os campos!' });
    }

    const equipamento = new Equipamento({
        tag,
        ultima_calibracao,
        proxima_calibracao,
        tag,
        ultima_calibracao,
        proxima_calibracao,
        norma,
        ensaio,
        metodo,
        teste,
        fabricante,
        modelo,
        serie,
        capacidade,
        ponto_calibracao,
        tolerancia,
        periocidade,
        procedimento,
        registro,
        observacoes
    });

    try {
        await equipamento.save();
        res.status(201).json({ mensagem: 'Equipamento criado com sucesso!' });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mensagem: "Aconteceu um erro interno no servidor, tente novamente mais tarde!"
        });
    }
}

const listar = async (req, res) => {
    Equipamento.find()
        .then((equipamentos) => {
            res.status(200).json({ equipamentos });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                mensagem: "Aconteceu um erro interno no servidor, tente novamente mais tarde!"
            });
        });
}

module.exports = { registrar, listar };