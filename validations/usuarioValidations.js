const Joi = require('joi');

const registerValidation = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().required(),
    senha: Joi.string().required(),
    confirmarSenha: Joi.string().valid(Joi.ref('senha')).required()
})

const loginValidation = Joi.object({
    email: Joi.string().required(),
    senha: Joi.string().required()
})



module.exports = {registerValidation, loginValidation};