const { parentPort } = require("worker_threads");
var EventSource = require("eventsource");

var es = new EventSource("http://localhost:5000/stream-express-sse");
es.addEventListener("chat-messages", function (e) {
  //console.log(JSON.parse(e.data));
  parentPort.postMessage(JSON.parse(e.data));
});
