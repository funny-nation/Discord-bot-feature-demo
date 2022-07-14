FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g ts-node

COPY . .

RUN npm run build

CMD [ "npm", "start" ]
