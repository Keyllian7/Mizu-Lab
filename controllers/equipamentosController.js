const mongoose = require('mongoose');
require('../models/Equipamento');
const Equipamento = mongoose.model('equipamentos');

const registrar = async (req, res) => {

    const {
        nome, tag,
        norma, ensaio, metodo, teste, fabricante,
        modelo, serie, capacidade, ponto_calibracao,
        tolerancia, periocidade, procedimento, registro, observacoes
    } = req.body;

    if (!tag || !norma || !ensaio ||
        !metodo || !teste || !fabricante || !modelo || !serie || !capacidade ||
        !ponto_calibracao || !tolerancia || !periocidade || !procedimento || !registro || !observacoes) {
        return res.status(422).json({ mensagem: 'Preencha todos os campos!' });
    }

    const equipamento = new Equipamento({
        tag,
        nome,
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

const deletar = async (req, res) => {
    if (Equipamento.findById(req.params.id) !== null) {
        Equipamento.deleteOne({ _id: req.params.id }).then(() => {
            res.status(200).json({ mensagem: 'Equipamento deletado com sucesso!' });
        }).catch((err) => {
            res.status(500).json({
                mensagem: "Aconteceu um erro interno no servidor, tente novamente mais tarde!"
            });
        })
    } else {
        res.status(404).json({ mensagem: 'Equipamento não encontrado!' });
    }
}

const atualizar = async (req, res) => {

    if (!req.body.tag || !req.body.norma || !req.body.ensaio ||
        !req.body.metodo || !req.body.teste || !req.body.fabricante || !req.body.modelo || !req.body.serie || !req.body.capacidade ||
        !req.body.ponto_calibracao || !req.body.tolerancia || !req.body.periocidade || !req.body.procedimento || !req.body.registro || !req.body.observacoes) {
        return res.status(422).json({ mensagem: 'Preencha todos os campos!' });
    }

    Equipamento.findOne({ _id: req.params.id }).then((equipamento) => {
        equipamento.nome = req.body.nome;
        equipamento.tag = req.body.tag;
        equipamento.norma = req.body.norma;
        equipamento.ensaio = req.body.ensaio;
        equipamento.metodo = req.body.metodo;
        equipamento.teste = req.body.teste;
        equipamento.fabricante = req.body.fabricante;
        equipamento.modelo = req.body.modelo;
        equipamento.serie = req.body.serie;
        equipamento.capacidade = req.body.capacidade;
        equipamento.ponto_calibracao = req.body.ponto_calibracao;
        equipamento.tolerancia = req.body.tolerancia;
        equipamento.periocidade = req.body.periocidade;
        equipamento.procedimento = req.body.procedimento;
        equipamento.registro = req.body.registro;
        equipamento.observacoes = req.body.observacoes;

        equipamento.save().then(() => {
            res.status(200).json({ mensagem: 'Equipamento atualizado com sucesso!' });
        }).catch((err) => {
            res.status(500).json({
                mensagem: "Não foi possível atualizar o equipamento, tente novamente mais tarde!"
            })
        })
    })
}

const detalhes = async(req, res) => {
    Equipamento.findById({_id: req.params.id}).then((equipamento) => {
        res.status(200).json({ equipamento });
    }).catch((err) => {
        res.status(500).json({
            mensagem: "Não foi possível encontrar o equipamento, tente novamente mais tarde!"
        })
    })
}

module.exports = { registrar, listar, deletar, atualizar, detalhes };