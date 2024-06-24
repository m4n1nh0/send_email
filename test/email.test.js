const request = require('supertest'); // Importa a biblioteca Supertest para realizar requisições HTTP
const app = require('../src/app'); // Importa a aplicação Express (assumindo que o arquivo server.js está em src/)
const assert = require('assert'); // Importa o módulo assert do Node.js para asserções

describe('Email Sending API', () => {

    it('should return server detail message on GET /', async () => {
        // Faz uma requisição GET para a rota '/'
        const response = await request(app).get('/');

        // Verifica se o código de status da resposta é 200
        assert.strictEqual(response.statusCode, 200);

        // Verifica se o corpo da resposta contém o detalhe esperado
        assert.strictEqual(response.body.detail, 'Servidor para envio de e-mail');
    });

    it('should send email on POST /email', async () => {
        // Dados do email a ser enviado
        const emailData = {
            send_to: 'destinatario@example.com',
            send_subject: 'Assunto do Email',
            send_text: 'Corpo do email'
        };

        // Faz uma requisição POST para a rota '/email' enviando os dados do email
        const response = await request(app)
            .post('/email')
            .send(emailData);

        // Verifica se o código de status da resposta é 200 (sucesso)
        assert.strictEqual(response.statusCode, 200);

        // Verifica se o corpo da resposta contém o detalhe esperado de sucesso no envio
        assert.strictEqual(response.body.detail, 'Email enviado com sucesso');
    });

    it('should return error on POST /email with invalid data', async () => {
        // Dados inválidos do email (faltando informações)
        const emailData = {
            send_to: '',
            send_subject: '',
            send_text: ''
        };

        // Faz uma requisição POST para a rota '/email' com dados inválidos
        const response = await request(app)
            .post('/email')
            .send(emailData);

        // Verifica se o código de status da resposta é 400 (erro)
        assert.strictEqual(response.statusCode, 400);

        // Verifica se o corpo da resposta contém o detalhe esperado de erro no envio
        assert.strictEqual(response.body.detail, 'Email não enviado');
    });
});
