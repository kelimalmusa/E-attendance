const cp = require("child_process");

console.log("paralel biçimde ");
const p1 = cp.fork("fetch0Tweets.js");
const p2 = cp.fork("fetch1Tweets.js");
const p3 = cp.fork("fetch2Tweets.js");

p1.on("message", (message) => console.log(message));
p2.on("message", (message) => console.log(message));
p3.on("message", (message) => console.log(message));