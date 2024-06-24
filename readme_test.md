# Testes Automatizados

Este projeto utiliza Mocha e Supertest para testes automatizados. Abaixo estão detalhadas as informações sobre como os testes são organizados e como você pode executá-los utilizando Docker.

## Estrutura de Diretórios de Teste

Os testes são organizados no diretório `test`, com cada arquivo correspondendo a um conjunto específico de funcionalidades ou endpoints da API.

- **email.test.js**: Contém testes relacionados ao envio de e-mails através da API.

## Ferramentas Utilizadas

- **Mocha**: Framework de testes que fornece estrutura e suporte para testes assíncronos.
- **Supertest**: Biblioteca para testar APIs HTTP de forma fácil e concisa.
- **Assert**: Módulo nativo do Node.js utilizado para asserções nos testes.

## Configuração

Antes de executar os testes, certifique-se de ter instalado todas as dependências do projeto utilizando o seguinte comando:

```bash
npm install
```

## Executando os Testes Localmente

Para executar os testes automatizados localmente, utilize o seguinte comando:

```bash
npm test
```

Este comando iniciará a execução dos testes definidos no diretório `test`. Os resultados dos testes serão exibidos no console.

## Executando os Testes com Docker

Se você preferir executar os testes dentro de um container Docker, certifique-se de ter o Docker instalado em seu ambiente. O Dockerfile já está configurado para executar os testes automatizados.

### Passos para Executar os Testes com Docker

1. **Construa a Imagem Docker:**

   Primeiramente, construa a imagem Docker a partir do Dockerfile:

   ```bash
   docker build -t email-sending-test .
   ```

2. **Execute os Testes:**

   Em seguida, execute os testes dentro do container Docker criado:

   ```bash
   docker run --rm email-sending-test
   ```

   Este comando iniciará a execução dos testes automatizados dentro do container Docker. Os resultados dos testes serão exibidos no console do seu terminal.

### Detalhes dos Testes

Os testes são configurados com timeouts apropriados para garantir que não falhem prematuramente devido a lentidão na resposta do servidor.

### Cobertura de Testes

Atualmente, os testes cobrem:

- Verificação do servidor respondendo corretamente à rota GET `/`.
- Envio de e-mail com dados válidos através da rota POST `/email`.
- Tratamento correto de dados inválidos ao tentar enviar e-mail.
