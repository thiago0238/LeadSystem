FROM node:20-alpine

# Cria diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia restante da aplicação
COPY . .

# Gera os clientes Prisma
RUN npx prisma generate

# Expõe a porta usada pelo app (por padrão, 3000)
EXPOSE 3000

# Comando para iniciar o app
CMD ["npm", "run", "dev"]