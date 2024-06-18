// Importa a função listen do módulo app
const app = require('./app');
require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env

// Define a porta na qual o servidor vai escutar
// Utiliza a variável de ambiente APIPORT se estiver definida, ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor escutando na porta definida
app.listen(PORT, function (err) {
    // Se houver um erro ao iniciar o servidor, registra o erro no console
    if (err) console.log(err);
    // Se o servidor iniciar com sucesso, registra uma mensagem no console indicando a porta na qual está escutando
    console.log("Server listening on PORT", PORT);
});
