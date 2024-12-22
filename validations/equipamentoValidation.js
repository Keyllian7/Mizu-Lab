const Joi = require('joi');

const schemaEquipamento = Joi.object({
    responsavel: Joi.string().required(),
    nome: Joi.string().required(),
    tag: Joi.string().required(),
    norma: Joi.string().required(),
    ensaio: Joi.string().required(),
    metodo: Joi.string().required(),
    teste: Joi.string().required(),
    fabricante: Joi.string().required(),
    modelo: Joi.string().required(),
    serie: Joi.string().required(),
    capacidade: Joi.string().required(),
    ponto_calibracao: Joi.string().required(),
    tolerancia: Joi.string().required(),
    procedimento: Joi.string().required(),
    registro: Joi.string().required(),
})

const calibrbarEquipamento = Joi.object({
    periocidade: Joi.string().required(),
    observacoes: Joi.string().required(),
})

module.exports = {schemaEquipamento, calibrbarEquipamento};