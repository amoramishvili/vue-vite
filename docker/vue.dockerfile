FROM node:16-alpine


ARG bundle
RUN mkdir -p /app

WORKDIR /app

RUN apk add python3 make g++

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

RUN $bundle