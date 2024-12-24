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
