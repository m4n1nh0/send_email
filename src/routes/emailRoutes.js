// Importa o Router do express para criar rotas
const express = require('express');
// Cria uma instância do Router
const emailRoutes = express.Router();
// Importa a função send_email do controlador de email
const { send_email } = require('../controllers/emailController');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Verifica se o servidor está funcionando
 *     responses:
 *       200:
 *         description: Servidor funcionando
 */
emailRoutes.get('/', (req, res) => {
    // Rota GET para verificar se o servidor está funcionando
    res.send({ detail: "Servidor para envio de e-mail" });
});

/**
 * @swagger
 * /email:
 *   post:
 *     summary: Envia um e-mail
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               send_to:
 *                 type: string
 *                 description: O endereço de e-mail do destinatário
 *                 example: destinatario@example.com
 *               send_subject:
 *                 type: string
 *                 description: O assunto do e-mail
 *                 example: Assunto do Email
 *               send_text:
 *                 type: string
 *                 description: O corpo do e-mail
 *                 example: Corpo do email
  *     responses:
 *       200:
 *         description: Resultado do envio do e-mail
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 detail:
 *                   type: string
 *                   example: Email enviado com sucesso
 *       400:
 *         description: Falha no envio do e-mail
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 detail:
 *                   type: string
 *                   example: Email não enviado
 */
emailRoutes.post('/email', async (req, res) => {
    // Rota POST para enviar um email
    // Obtém os dados do corpo da requisição
    const envio = await send_email(req.body.send_to, req.body.send_subject, req.body.send_text);
    // Verifica se o email foi enviado com sucesso e envia a resposta adequada
    if (envio) {
        res.send({ detail: 'Email enviado com sucesso' }); // Resposta de sucesso
    } else {
        res.status(400).send({ detail: 'Email não enviado' }); // Resposta de falha
    }
});

// Exporta o emailRoutes para que possa ser utilizado em outras partes da aplicação
module.exports = emailRoutes;
