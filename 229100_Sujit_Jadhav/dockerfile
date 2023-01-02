From node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.js
expose 3000