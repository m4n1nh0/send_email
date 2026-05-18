# Use uma imagem oficial do Node.js como base
FROM node:20-slim

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm ci --omit=dev

# Copie todo o código da aplicação para o diretório de trabalho
COPY . .

# Aponta ambiente de produção
ENV NODE_ENV=production

# Exponha a porta que a aplicação vai rodar
EXPOSE 8080

# Defina o comando para rodar a aplicação
CMD ["npm", "start"]
