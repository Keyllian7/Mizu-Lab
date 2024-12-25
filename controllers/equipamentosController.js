const mongoose = require('mongoose');
require('../models/Equipamento');
const Equipamento = mongoose.model('equipamentos');
const {schemaEquipamento, calibrbarEquipamento} = require('../validations/equipamentoValidation');
const { validate } = require('../helpers/validate');
const EquipamentoDTO = require('../dtos/EquipamentoDTO');

const registrar = async (req, res) => {
    const equipamentoDTO = new EquipamentoDTO(req.body);

    const {
        responsavel,
        nome,
        tag,
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
        procedimento,
        registro,
    } = equipamentoDTO;

    const mensagemErro = validate(schemaEquipamento, req.body);
    if (mensagemErro) {
        return res.status(422).json({ mensagem: mensagemErro });
    }

    const equipamento = new Equipamento({
        responsavel,
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
        procedimento,
        registro,
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
    Equipamento.find().populate('responsavel', 'nome')
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

    const {
        responsavel,
        nome,
        tag,
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
        procedimento,
        registro,
    } = req.body;

    const mensagemErro = validate(schemaEquipamento, req.body);
    if (mensagemErro) {
        return res.status(422).json({ mensagem: mensagemErro });
    }

    Equipamento.findOne({ _id: req.params.id }).then((equipamento) => {
        equipamento.responsavel = req.body.responsavel;
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
        equipamento.procedimento = req.body.procedimento;
        equipamento.registro = req.body.registro;

        equipamento.save().then(() => {
            res.status(200).json({ mensagem: 'Equipamento atualizado com sucesso!' });
        }).catch((err) => {
            res.status(500).json({
                mensagem: "Não foi possível atualizar o equipamento, tente novamente mais tarde!"
            })
        })
    })
}

const detalhes = async (req, res) => {
    Equipamento.findById({ _id: req.params.id }).then((equipamento) => {
        res.status(200).json({ equipamento });
    }).catch((err) => {
        res.status(500).json({
            mensagem: "Não foi possível encontrar o equipamento, tente novamente mais tarde!"
        })
    })
}

const calibrar = async (req, res) => {
    const { periocidade, observacoes } = req.body;
    const mensagemErro = validate(calibrbarEquipamento, req.body);
    if (mensagemErro) {
        return res.status(422).json({ mensagem: mensagemErro });
    }   

    Equipamento.findById({ _id: req.params.id }).then((equipamento) => {
        if (req.params.id === undefined) {
            res.status(404).json({ mensagem: 'Equipamento não encontrado!' });
        }
        equipamento.ultima_calibracao = Date.now();
        equipamento.periocidade = req.body.periocidade;
        var tempo = undefined;
        switch (req.body.periocidade) {
            case 'Anual':
                tempo = 31536000000;
                break;
            case 'Semestral':
                tempo = 15768000000;
                break;
            case 'Trimestral':
                tempo = 7884000000;
                break;
            default:
                break
        }
        equipamento.observacoes = req.body.observacoes;
        equipamento.proxima_calibracao = Date.now() + tempo;

        equipamento.save().then(() => {
            res.status(200).json({ mensagem: 'Equipamento calibrado com sucesso!' });
        }).catch((err) => {
            res.status(500).json({
                mensagem: "Não foi possível calibrar o equipamento, tente novamente mais tarde!"
            })
        })
    }).catch((err) => {
        res.status(500).json({
            mensagem: "Erro interno no servidor, tente novamente mais tarde!"
        })
    })
}

module.exports = { registrar, listar, deletar, atualizar, detalhes, calibrar };