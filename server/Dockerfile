# Development
FROM ubuntu:20.04 AS development

USER root

WORKDIR /home/app

COPY package*.json ./

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs
RUN apt-get -y install ghostscript
RUN apt-get -y install graphicsmagick
RUN npm install -g yarn

RUN yarn add glob rimraf

RUN yarn --only=development

COPY . .

RUN yarn build

# Production
FROM ubuntu:20.04 as production

USER root
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/app

COPY package*.json ./

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs
RUN apt-get install ghostscript
RUN apt-get install graphicsmagick
RUN npm install -g yarn

RUN yarn --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]