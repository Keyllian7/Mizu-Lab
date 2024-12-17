const jwt = require('jsonwebtoken');

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

module.exports = verificarToken;