/**
 * @swagger
 * /equipamentos/registrar:
 *   post:
 *     summary: Cadastra um novo equipamento
 *     tags: [Equipamentos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - responsavel
 *               - nome
 *               - tag
 *               - norma
 *               - ensaio
 *               - metodo
 *               - teste
 *               - fabricante
 *               - modelo
 *               - serie
 *               - capacidade
 *               - ponto_calibracao
 *               - tolerancia
 *               - procedimento
 *               - registro
 *             properties:
 *               responsavel:
 *                 type: string
 *                 description: ID do responsável pelo equipamento
 *               nome:
 *                 type: string
 *                 description: Nome do equipamento
 *               tag:
 *                 type: string
 *                 description: Tag do equipamento
 *               norma:
 *                 type: string
 *                 description: Norma do equipamento
 *               ensaio:
 *                 type: string
 *                 description: Ensaio do equipamento
 *               metodo:
 *                 type: string
 *                 description: Método do equipamento
 *               teste:
 *                 type: string
 *                 description: Teste do equipamento
 *               fabricante:
 *                 type: string
 *                 description: Fabricante do equipamento
 *               modelo:
 *                 type: string
 *                 description: Modelo do equipamento
 *               serie:
 *                 type: string
 *                 description: Série do equipamento
 *               capacidade:
 *                 type: string
 *                 description: Capacidade do equipamento
 *               ponto_calibracao:
 *                 type: string
 *                 description: Ponto de calibração do equipamento
 *               tolerancia:
 *                 type: string
 *                 description: Tolerância do equipamento
 *               procedimento:
 *                 type: string
 *                 description: Procedimento do equipamento
 *               registro:
 *                 type: string
 *                 description: Registro do equipamento
 *     responses:
 *       201:
 *         description: Equipamento criado com sucesso
 *       422:
 *         description: Erro de validação
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /equipamentos/listar:
 *   get:
 *     summary: Lista todos os equipamentos
 *     tags: [Equipamentos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de equipamentos
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /equipamentos/deletar/{id}:
 *   get:
 *     summary: Deleta um equipamento pelo ID
 *     tags: [Equipamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do equipamento
 *     responses:
 *       200:
 *         description: Equipamento deletado com sucesso
 *       404:
 *         description: Equipamento não encontrado
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /equipamentos/atualizar/{id}:
 *   put:
 *     summary: Atualiza um equipamento pelo ID
 *     tags: [Equipamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do equipamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               responsavel:
 *                 type: string
 *                 description: ID do responsável pelo equipamento
 *               nome:
 *                 type: string
 *                 description: Nome do equipamento
 *               tag:
 *                 type: string
 *                 description: Tag do equipamento
 *               norma:
 *                 type: string
 *                 description: Norma do equipamento
 *               ensaio:
 *                 type: string
 *                 description: Ensaio do equipamento
 *               metodo:
 *                 type: string
 *                 description: Método do equipamento
 *               teste:
 *                 type: string
 *                 description: Teste do equipamento
 *               fabricante:
 *                 type: string
 *                 description: Fabricante do equipamento
 *               modelo:
 *                 type: string
 *                 description: Modelo do equipamento
 *               serie:
 *                 type: string
 *                 description: Série do equipamento
 *               capacidade:
 *                 type: string
 *                 description: Capacidade do equipamento
 *               ponto_calibracao:
 *                 type: string
 *                 description: Ponto de calibração do equipamento
 *               tolerancia:
 *                 type: string
 *                 description: Tolerância do equipamento
 *               procedimento:
 *                 type: string
 *                 description: Procedimento do equipamento
 *               registro:
 *                 type: string
 *                 description: Registro do equipamento
 *     responses:
 *       200:
 *         description: Equipamento atualizado com sucesso
 *       422:
 *         description: Erro de validação
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /equipamentos/detalhes/{id}:
 *   get:
 *     summary: Detalha um equipamento pelo ID
 *     tags: [Equipamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do equipamento
 *     responses:
 *       200:
 *         description: Detalhes do equipamento
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /equipamentos/calibrar/{id}:
 *   put:
 *     summary: Gerencia a calibração de um equipamento pelo ID
 *     tags: [Equipamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do equipamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               periocidade:
 *                 type: string
 *                 description: Periocidade da calibração
 *               observacoes:
 *                 type: string
 *                 description: Observações da calibração
 *     responses:
 *       200:
 *         description: Equipamento calibrado com sucesso
 *       422:
 *         description: Erro de validação
 *       500:
 *         description: Erro interno no servidor
 */