// Importa os módulos necessários do express e outros pacotes
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const emailRoutes = require('./routes/emailRoutes');
const swaggerDocs = require('../docs/swagger');

// Cria uma instância do aplicativo express
const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Rota para servir a documentação da API gerada pelo Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rota principal que utiliza as rotas definidas em emailRoutes
app.use('/', emailRoutes);

// Exporta a instância do aplicativo express para uso em outros módulos
module.exports = app;