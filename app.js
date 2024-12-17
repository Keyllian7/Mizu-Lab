require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db')
const verificarToken = require('./middlewares/verificarToken')
const auth = require('./routes/auth')

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

app.use('/auth', auth)

const porta = 8081
app.listen(porta, () => {
    console.log('Servidor online com sucesso!');
})
