// Importa o módulo swagger-jsdoc, que gera documentação Swagger com base em JSDoc.
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env

// Configuração do Swagger
const swaggerOptions = {
    // Define a especificação do Swagger
    swaggerDefinition: {
        // Versão do OpenAPI usada
        openapi: '3.0.0',
        // Informações sobre a API
        info: {
            title: 'Email Sending API', // Título da API
            version: '1.0.0', // Versão da API
            description: 'API para envio de e-mails em Node' // Descrição da API
        },
        // Definição dos servidores onde a API está hospedada
        servers: [
            {
                // URL do servidor, utilizando a porta definida em APIPORT ou 3000 por padrão
                url: `http://localhost:${process.env.PORT || 3000}`,
                description: 'Servidor local' // Descrição do servidor
            }
        ]
    },
    // Caminho para os arquivos que contêm as anotações do Swagger
    apis: ['./src/routes/*.js']
};

// Gera a documentação Swagger com base nas opções configuradas
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Exporta a documentação Swagger para ser usada em outras partes da aplicação
module.exports = swaggerDocs;