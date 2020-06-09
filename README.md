# POC: Express + SSE

Just a POC application to test out how Express and SSE works

## Getting Started

Just plain Express:

- `npm start` 

With Docker + nginx:

- `docker-compose up`


## Docker Development

- `docker build -t poc-express-sse .`
- `docker run --rm -d -p 5000:5000 --name app poc-express-sse`