# POC: Express + SSE

Just a POC application to test out how Express and SSE works

## Getting Started

Just plain Express:

- `npm start` 

With Docker + nginx:

- `docker-compose up`


## Benchmarking

Run `npm start` to start the SSE server
Run `node node-bench.js` to start 1000 connections
Go to localhost:5000 and send a message.
The benchmark should show every 10 seconds a report of all the messages and the span of time between messages.


## Docker Development

- `docker build -t poc-express-sse .`
- `docker run --rm -d -p 5000:5000 --name app poc-express-sse`