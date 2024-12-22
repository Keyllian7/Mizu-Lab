const Joi = require('joi');
const ToleranciaEnum = require('../enums/Tolerancia');
const ProcedimentoEnum = require('../enums/Procedimento');
const RegistroEnum = require('../enums/Registro');
const MetodoEnum = require('../enums/Metodo');
const EnsaioEnum = require('../enums/Ensaio');
const PeriocidadeEnum = require('../enums/Periocidade');
const TesteEnum = require('../enums/Teste');

const schemaEquipamento = Joi.object({
    responsavel: Joi.string().required(),
    nome: Joi.string().required(),
    tag: Joi.string().required(),
    norma: Joi.string().required(),
    ensaio: Joi.string().required().valid(...Object.values(EnsaioEnum)),
    metodo: Joi.string().required().valid(...Object.values(MetodoEnum)),
    teste: Joi.string().required().valid(...Object.values(TesteEnum)),
    fabricante: Joi.string().required(),
    modelo: Joi.string().required(),
    serie: Joi.string().required(),
    capacidade: Joi.string().required(),
    ponto_calibracao: Joi.string().required(),
    tolerancia: Joi.string().required().valid(...Object.values(ToleranciaEnum)),
    procedimento: Joi.string().required().valid(...Object.values(ProcedimentoEnum)),
    registro: Joi.string().required().valid(...Object.values(RegistroEnum)),
})

const calibrbarEquipamento = Joi.object({
    periocidade: Joi.string().required().valid(...Object.values(PeriocidadeEnum)),
    observacoes: Joi.string().required(),
})

module.exports = {schemaEquipamento, calibrbarEquipamento};