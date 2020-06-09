FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 5000
ENV IP 0.0.0.0
CMD [ "node", "index.js" ]
