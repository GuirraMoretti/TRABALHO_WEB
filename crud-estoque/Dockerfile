# Use uma imagem Node.js
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o código da aplicação para o container
COPY . .

# Exponha a porta que o Express usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
