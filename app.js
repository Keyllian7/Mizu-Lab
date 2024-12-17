require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./config/db')

// Models
const Usuario = require('./models/Usuario')

// Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect(db.DB_URL).then(() => {
        console.log("Conectado ao banco de dados com sucesso!")
    }).catch((err) => {
        console.log("Erro ao se conectar ao banco de dados: " + err)
    })

const app = express();
app.use(express.json());

// Rota inicial - pública
app.get('/', (req, res) => {
    res.status(200).json({ mensagem: 'Testando Servidor' });
})

// Rota consulta - privada
app.get('/consulta/:id', verificarToken, async(req, res) => {
    const id = req.params.id;
    const usuario = await Usuario.findById(id, '-senha');

    if(!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado!' })
    }

    res.status(200).json({usuario});

})

function verificarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json({ mensagem: 'Acesso negado!' })
    }

    try {
        const secret = process.env.SENHA_JWT;
        jwt.verify(token, secret)
        next()
    } catch (error) {
        res.status(400).json({ mensagem: 'Token inválido!' })
    }
}

// Rota de registro
app.post('/auth/registrar', async(req, res) => {
    const { nome, email, senha, confirmarSenha } = req.body;
    if(!nome || !email || !senha) {
        return res.status(422).json({ mensagem: 'Preencha todos os campos!' })
    }
    if(senha !== confirmarSenha) {
        return res.status(422).json({ mensagem: 'As senhas não conferem!' })
    }

    const usuarioExistente = await Usuario.findOne({email: email});
    if(usuarioExistente) {
        return res.status(422).json({ mensagem: 'Esse email já está em uso!' })
    }

    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    const usuario = Usuario({
        nome,
        email,
        senha: senhaHash
    })

    try {

        await usuario.save();
        res.status(201).json({ mensagem: 'Usuário criado com sucesso!' })
        
    } catch (err) {
        console.log(error)
        res.status(500)
        .json({
            mensagem: "Aconteceu um erro interno no servidor, tente novamente mais tarde!" 
        })
        
    }

})

// Rota de login
app.post('/auth/login', async(req, res) => {
    const {email, senha} = req.body;

    if(!email || !senha) {
        return res.status(422).json({ mensagem: 'Preencha todos os campos!' })
    }

    const usuario = await Usuario.findOne({email: email});
    if(!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado!' })
    }
    
    const validarSenha = await bcrypt.compare(senha, usuario.senha);

    if(!validarSenha) {
        return res.status(422).json({ mensagem: 'Senha inválida!' })
    }

    try{
        const secret = process.env.SENHA_JWT;
        const token = jwt.sign({
            id: usuario._id,
        }, secret, { expiresIn: '1h' });
        res.status(200).json({ mensagem: 'Login efetuado com sucesso!', token })

    } catch (err) {
        console.log(error)
        res.status(500)
        .json({
            mensagem: "Aconteceu um erro interno no servidor, tente novamente mais tarde!" 
        })
        
    }

})

const porta = 8081
app.listen(porta, () => {
    console.log('Servidor online com sucesso!');
})
