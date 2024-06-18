# Email Sending Server

Este repositório contém um servidor Express.js simples que utiliza o Nodemailer para enviar e-mails. A aplicação suporta CORS e pode ser usada para enviar e-mails através de requisições HTTP POST. Além disso, a documentação da API é gerada e servida usando Swagger.

## Funcionalidades

- Envio de e-mails através de um endpoint HTTP POST.
- Resposta indicando o sucesso ou falha do envio do e-mail.
- Endpoint HTTP GET básico para testar a funcionalidade do servidor.
- Documentação da API disponível através do Swagger.

## Pré-requisitos

- Node.js instalado.
- NPM (Node Package Manager) instalado.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/email-sending-server.git
cd email-sending-server
```

2. Instale as dependências:

```bash
npm install
```

## Configuração

Antes de executar o servidor, você precisa configurar as credenciais de e-mail no código. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```plaintext
MAIL_HOST=mail.provedor.com.br
MAIL_PORT=465
MAIL_SECURE=true
MAIL_USER=seuemail@provedor.com.br
MAIL_PASS=senhaemail
MAIL_FROM=semailenvio@provedor.com.br
```

## Uso

1. Inicie o servidor:

```bash
npm start
```

2. O servidor estará rodando na porta 3000. Você pode verificar acessando `http://localhost:3000` em seu navegador, que deve retornar um JSON com uma mensagem de detalhes do servidor.

### Envio de E-mails

Para enviar um e-mail, faça uma requisição HTTP POST para `http://localhost:3000/email` com o seguinte formato de JSON no corpo da requisição:

```json
{
  "send_to": "destinatario@example.com",
  "send_subject": "Assunto do Email",
  "send_text": "Corpo do email"
}
```

### Exemplos de Requisição

Utilizando `curl`:

```bash
curl -X POST http://localhost:3000/email -H "Content-Type: application/json" -d '{
  "send_to": "destinatario@example.com",
  "send_subject": "Assunto do Email",
  "send_text": "Corpo do email"
}'
```

Utilizando JavaScript (fetch):

```javascript
fetch('http://localhost:3000/email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    send_to: 'destinatario@example.com',
    send_subject: 'Assunto do Email',
    send_text: 'Corpo do email'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### Documentação da API

A documentação da API está disponível através do Swagger. Acesse `http://localhost:3000/api-docs` para visualizar a documentação interativa e testar os endpoints.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Contato

Para mais informações, entre em contato através do e-mail: [marianofmendonca@gmail.com](mailto:marianofmendonca@gmail.com).