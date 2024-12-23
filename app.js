require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db')
const auth = require('./routes/auth')
const equipamentos = require('./routes/equipamentos')
const usuarios = require('./routes/usuarios')
const corsOptions = require('./config/cors')
const cors = require('cors');
const swaggerSetup = require('./swagger');

// Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect(db.DB_URL).then(() => {
        console.log("Conectado ao banco de dados com sucesso!")
    }).catch((err) => {
        console.log("Erro ao se conectar ao banco de dados: " + err)
    })

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

// Rota inicial - pública
app.get('/', (req, res) => {
    res.status(200).json({ mensagem: 'Conectado ao servidor!' });
})

app.use('/auth', auth)
app.use('/equipamentos', equipamentos)
app.use('/usuarios', usuarios)

// Swagger
swaggerSetup(app);

const porta = 8081
app.listen(porta, () => {
    console.log('Servidor online com sucesso!');
})
