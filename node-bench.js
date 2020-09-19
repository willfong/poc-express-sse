// https://stackoverflow.com/questions/18613023/how-to-create-threads-in-nodejs
const { Worker } = require("worker_threads");

let results = {};

const spawnWorker = () => {
  return new Promise(() => {
    const worker = new Worker("./node-client.js");
    worker.on("message", (data) => {
			if (!results[data]) results[data] = [];
			results[data].push(new Date());
		});
  });
};

const spawnWorkers = () => {
  for (let t = 1; t <= 1000; t++)
    spawnWorker();
};

spawnWorkers();


function report() {
	console.log(new Date());
	const messages = Object.keys(results);

	messages.forEach(message => {
		let ts = results[message]
		ts.sort()
		console.log(`${message}: ${ts[ts.length-1] - ts[0]}ms from ${ts.length} entries`);
	})
	
}

setInterval(report, 10000);
