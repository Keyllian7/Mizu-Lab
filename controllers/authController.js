const mongoose = require('mongoose');
require("../models/Usuario");
const Usuario = mongoose.model('Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const hashSenha = require('../helpers/hashSenha');
const { registerValidation, loginValidation } = require('../validations/usuarioValidations');
const { validate } = require('../helpers/validate');

const registrar = async (req, res) => {
    const { nome, email, senha, confirmarSenha } = req.body;
    
    const mensagemErro = validate(registerValidation, req.body);
    if (mensagemErro) {
        return res.status(422).json({ mensagem: mensagemErro });
    }

    const usuarioExistente = await Usuario.findOne({ email: email });
    if (usuarioExistente) {
        return res.status(422).json({ mensagem: 'Esse email já está em uso!' });
    }
    
    const senhaHash = await hashSenha(senha);

    const usuario = new Usuario({
        nome,
        email,
        senha: senhaHash
    });

    try {
        await usuario.save();
        res.status(201).json({ mensagem: 'Usuário criado com sucesso!' });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mensagem: "Aconteceu um erro interno no servidor, tente novamente mais tarde!"
        });
    }
};

const login = async (req, res) => {
    const { email, senha } = req.body;

    const mensagemErro = validate(loginValidation, req.body);
    if (mensagemErro) {
        return res.status(422).json({ mensagem: mensagemErro });
    }

    const usuario = await Usuario.findOne({ email: email });
    if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado!' });
    }

    const validarSenha = await bcrypt.compare(senha, usuario.senha);
    if (!validarSenha) {
        return res.status(422).json({ mensagem: 'Senha inválida!' });
    }

    try {
        const secret = process.env.SENHA_JWT;
        const token = jwt.sign({
            id: usuario._id,
        }, secret, { expiresIn: '2h' });
        res.status(200).json({ mensagem: 'Login efetuado com sucesso!', token });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mensagem: "Aconteceu um erro interno no servidor, tente novamente mais tarde!"
        });
    }
};

module.exports = {
    registrar,
    login
};