FROM node:14-alpine

EXPOSE 3001

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "dev" ]