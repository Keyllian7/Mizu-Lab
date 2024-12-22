const Joi = require('joi');

const registerValidation = Joi.object({
    nome: Joi.string().required().messages({
        'string.empty': 'O campo nome é obrigatório'
    }),
    email: Joi.string().required().messages({
        'string.empty': 'O campo email é obrigatório'
    }),
    senha: Joi.string().required().messages({
        'string.empty': 'O campo senha é obrigatório'
    }),
    confirmarSenha: Joi.string().valid(Joi.ref('senha')).required().messages({
        'any.only': 'As senhas devem ser iguais'
    })
})

const loginValidation = Joi.object({
    email: Joi.string().required().messages({
        'string.empty': 'O campo email é obrigatório'
    }),
    senha: Joi.string().required().messages({
        'string.empty': 'O campo senha é obrigatório'
    })
})



module.exports = {registerValidation, loginValidation};