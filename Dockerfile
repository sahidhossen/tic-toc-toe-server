FROM node:latest
WORKDIR /Users/sahid/Desktop/M/tick-tack-toe/server
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 5000