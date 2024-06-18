const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = 3000;

// Middleware para analisar requisições JSON
app.use(express.json());
// Middleware para permitir CORS (Cross-Origin Resource Sharing)
app.use(cors());

/**
 * Função assíncrona para enviar e-mails.
 * @param {string} send_to - O endereço de e-mail do destinatário.
 * @param {string} send_subject - O assunto do e-mail.
 * @param {string} send_text - O corpo do e-mail.
 * @returns {boolean} - Retorna true se o e-mail for enviado com sucesso, false caso contrário.
 */
async function send_email(send_to, send_subject, send_text) {
    try {
        // Configuração do transportador do Nodemailer
        const transporter = nodemailer.createTransport({
            host: "mail.provedor.com.br",
            port: 465,
            secure: true, // true para conexão segura (SSL/TLS)
            auth: {
                user: 'seuemail@provedor.com.br', // Seu endereço de e-mail
                pass: 'senhaemail' // Sua senha de e-mail
            }
        });

        // Opções do e-mail
        const mailOptions = {
            from: 'semailenvio@provedor.com.br', // Endereço de e-mail do remetente
            to: send_to, // Endereço de e-mail do destinatário
            subject: send_subject, // Assunto do e-mail
            text: send_text // Corpo do e-mail
        };

        // Envia o e-mail e aguarda a resposta
        const info = await transporter.sendMail(mailOptions);
        try {
            console.log(info.response); // Log da resposta do envio
            return true;
        } catch (error) {
            console.error(error); // Log de erro em caso de falha ao logar a resposta
            return false;
        }
    } catch (error) {
        console.error(error); // Log de erro em caso de falha ao enviar o e-mail
        return false;
    }
}

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Email Sending API',
            version: '1.0.0',
            description: 'API para envio de e-mails em Node'
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: 'Servidor local'
            }
        ]
    },
    apis: [__filename]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Verifica se o servidor está funcionando
 *     responses:
 *       200:
 *         description: Servidor funcionando
 */
app.get('/', (req, res) => {
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
 */
app.post('/email', async (req, res) => {
    const envio = await send_email(req.body.send_to, req.body.send_subject, req.body.send_text);
    if (envio) {
        res.send({ detail: 'Email enviado com sucesso' }); // Resposta de sucesso
    } else {
        res.send({ detail: 'Email não enviado' }); // Resposta de falha
    }
});

// Inicia o servidor na porta especificada
app.listen(PORT, function (err) {
    if (err) console.log(err); // Log de erro em caso de falha ao iniciar o servidor
    console.log("Server listening on PORT", PORT); // Log de sucesso ao iniciar o servidor
});
