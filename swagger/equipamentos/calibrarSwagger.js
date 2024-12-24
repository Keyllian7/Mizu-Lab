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
