FROM node:14.17-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

ENV NODE_ENV production

USER node

COPY --chown=node:node . /usr/src/app

COPY . .

EXPOSE 8080
CMD ["node", "src/index.js"]
