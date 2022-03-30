#Each instruction in this file creates a new layer
#Here we are getting our node as Base image
FROM node:latest

WORKDIR /code

ENV PORT 3000

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["npm", "start"] 



