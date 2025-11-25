FROM node:22-alpine
# Instale o OpenSSL e suas dependências
# RUN apt-get update && apt-get install -y openssl libssl-dev
# Crie o diretório da aplicação
WORKDIR /app
# Copie os arquivos da aplicação
COPY package.json .
COPY . .
# Instale as dependências e gere os arquivos necessários
RUN npm ci 
# Gere os arquivos do Prisma
RUN npx prisma generate
# RUN npm i sharp
RUN npm run build
# Exponha a porta que a aplicação irá rodar
CMD ["npm","run","start"]
