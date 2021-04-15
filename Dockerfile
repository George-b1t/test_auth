FROM node:12.13.0-alpine

WORKDIR /usr/web

COPY package.json .
COPY yarn.lock .

COPY . .

RUN yarn install
