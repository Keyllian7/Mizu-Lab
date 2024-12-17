const mongoose = require('mongoose');
require("../models/Usuario");
const Usuario = mongoose.model('Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registrar = async (req, res) => {
    const { nome, email, senha, confirmarSenha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(422).json({ mensagem: 'Preencha todos os campos!' });
    }
    if (senha !== confirmarSenha) {
        return res.status(422).json({ mensagem: 'As senhas não conferem!' });
    }

    const usuarioExistente = await Usuario.findOne({ email: email });
    if (usuarioExistente) {
        return res.status(422).json({ mensagem: 'Esse email já está em uso!' });
    }

    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

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

    if (!email || !senha) {
        return res.status(422).json({ mensagem: 'Preencha todos os campos!' });
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
        }, secret, { expiresIn: '1h' });
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