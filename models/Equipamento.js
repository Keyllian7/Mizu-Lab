const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Enums
const EnsaioEnum = require('../enums/Ensaio');
const MetodoEnum = require('../enums/Metodo');
const TesteEnum = require('../enums/Teste');
const ToleranciaEnum = require('../enums/Tolerancia');
const PeriocidadeEnum = require('../enums/Periocidade');
const ProcedimentoEnum = require('../enums/Procedimento');
const RegistroEnum = require('../enums/Registro');

const Equipamento = new Schema({
    nome: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    ultima_calibracao: {
        type: Date,
        required: false,
        default: Date.now()
    },
    proxima_calibracao: {
        type: Date,
        required: false,
        default: Date.now()
    },
    norma: {
        type: String,
        required: true,
    },
    ensaio: {
        type: String,
        enum: Object.values(EnsaioEnum),
        required: true,
    },
    metodo: {
        type: String,
        enum: Object.values(MetodoEnum),
        required: true,
    },
    teste: {
        type: String,
        enum: Object.values(TesteEnum),
        required: true,
    },
    fabricante: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    serie: {
        type: String,
        required: true,
    },
    capacidade: {
        type: String,
        required: true,
    },
    ponto_calibracao: {
        type: String,
        required: true,
    },
    tolerancia: {
        type: String,
        enum: Object.values(ToleranciaEnum),
        required: true,
    },
    periocidade: {
        type: String,
        enum: Object.values(PeriocidadeEnum),
        required: true,
    },
    procedimento: {
        type: String,
        enum: Object.values(ProcedimentoEnum),
        required: true,
    },
    registro: {
        type: String,
        enum: Object.values(RegistroEnum),
        required: true,
    },
    observacoes: {
        type: String,
        required: false,
        default: 'Sem observações',
    }

})

mongoose.model('equipamentos', Equipamento);