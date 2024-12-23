/**
 * @swagger
 * /usuarios/listar:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuarios:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: ID do usuário
 *                       nome:
 *                         type: string
 *                         description: Nome do usuário
 *                       email:
 *                         type: string
 *                         description: Email do usuário
 *       500:
 *         description: Erro interno no servidor
 */

/**
 * @swagger
 * /usuarios/deletar/{id}:
 *   get:
 *     summary: Deleta um usuário pelo ID
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       500:
 *         description: Erro interno no servidor
 */