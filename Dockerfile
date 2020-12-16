FROM node:latest
WORKDIR /usr/app
COPY package.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]