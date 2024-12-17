require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./config/db')

// Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect(db.DB_URL).then(() => {
        console.log("Conectado ao banco de dados com sucesso!")
    }).catch((err) => {
        console.log("Erro ao se conectar ao banco de dados: " + err)
    })

const app = express();

// Rota inicial
app.get('/', (req, res) => {
    res.status(200).json({ mensagem: 'Testando Servidor' });
})

const PORT = 8081
app.listen(PORT, () => {
    console.log('Servidor online com sucesso!');
})
