// Importa o módulo nodemailer
const nodemailer = require('nodemailer');
require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env

// Configuração do transportador do Nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST, // Define o host do provedor de email
    port: process.env.MAIL_PORT, // Define a porta para comunicação com o servidor de email
    secure: process.env.MAIL_SECURE === true, // true para conexão segura (SSL/TLS)
    auth: {
        user: process.env.MAIL_USER, // Seu endereço de e-mail
        pass: process.env.MAIL_PASS // Sua senha de e-mail
    }
});

// Exporta o transportador para que possa ser usado em outras partes da aplicação.
module.exports = transporter