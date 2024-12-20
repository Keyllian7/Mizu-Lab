const bcrypt = require('bcrypt');

async function hashSenha(senha) {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(senha, salt);
}

module.exports = hashSenha;