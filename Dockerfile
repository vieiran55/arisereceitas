# Use uma imagem oficial do Node.js como imagem base
FROM node:18-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código do aplicativo para o contêiner
COPY . .

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
