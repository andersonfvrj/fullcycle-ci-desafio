FROM node:15-alpine3.13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

EXPOSE 3000

CMD ["node", "index.js"]