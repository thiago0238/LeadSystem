FROM node:22-slim
# Instale o OpenSSL e suas dependências
RUN apt-get update && apt-get install -y openssl libssl-dev
WORKDIR /app
COPY package.json .
COPY . .
RUN npm ci 
RUN npx prisma generate
# RUN npm i sharp
RUN npm run build
CMD ["npm","run","start"]
