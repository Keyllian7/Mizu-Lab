class EquipamentoDTO {
    constructor({
        responsavel,
        nome,
        tag,
        norma,
        ensaio,
        metodo,
        teste,
        fabricante,
        modelo,
        serie,
        capacidade,
        ponto_calibracao,
        tolerancia,
        procedimento,
        registro,
    }) {
        this.responsavel = responsavel;
        this.nome = nome;
        this.tag = tag;
        this.norma = norma;
        this.ensaio = ensaio;
        this.metodo = metodo;
        this.teste = teste;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.serie = serie;
        this.capacidade = capacidade;
        this.ponto_calibracao = ponto_calibracao;
        this.tolerancia = tolerancia;
        this.procedimento = procedimento;
        this.registro = registro;
    }
}

module.exports = EquipamentoDTO;