FROM node:14-alpine

EXPOSE 3000

WORKDIR /thiago-viana-dev-frontend

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]