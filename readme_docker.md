### Instruções de uso

1. **Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.**

2. **Pare e remova todos os contêineres, redes e volumes**
      
   * Usar apenas caso apresente o seguinte erro 

   ```
      ....
      container.image_config['ContainerConfig'].get('Volumes') or {} 
      KeyError: 'ContainerConfig'

   ```
   * Comando para limpar o volume
   ```bash
      docker-compose down --rmi all --volumes
   ```

3. **Construa e inicie os serviços usando Docker Compose:**

   ```bash
   docker-compose up --build
   ```

4. **Acesse a aplicação no navegador:**

   Abra o navegador e acesse `http://localhost:3000` para verificar se o servidor está funcionando corretamente.

5. **Envio de e-mails:**

   Utilize ferramentas como `curl`, Postman ou faça uma requisição HTTP POST para `http://localhost:3000/email` conforme descrito anteriormente no README.

6. **Documentação da API:**

   Acesse `http://localhost:3000/api-docs` para visualizar a documentação interativa do Swagger.

Isso deve configurar e rodar seu servidor de envio de e-mails em um contêiner Docker, garantindo que todas as dependências e variáveis de ambiente estejam devidamente configuradas.
