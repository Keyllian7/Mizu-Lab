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
