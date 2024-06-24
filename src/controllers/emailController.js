// Importa o transportador de email configurado no arquivo emailConfig.js
const transporter = require('../config/emailConfig');
require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env

/**
 * Função assíncrona para enviar e-mails.
 * @param {string} send_to - O endereço de e-mail do destinatário.
 * @param {string} send_subject - O assunto do e-mail.
 * @param {string} send_text - O corpo do e-mail.
 * @returns {boolean} - Retorna true se o e-mail for enviado com sucesso, false caso contrário.
 */
async function send_email(send_to, send_subject, send_text) {
    try {
        // Opções do e-mail
        const mailOptions = {
            from: process.env.MAIL_FROM, // Endereço de e-mail do remetente
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

// Exporta a função send_email para que possa ser usada em outras partes da aplicação.
module.exports = { send_email };
