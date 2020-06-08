const service = require("./yoklama.service.js");
const get2Tweets = () => {
  const start = process.hrtime();
  const tweets2 = service.get2Tweets();
  const end = process.hrtime();
  return tweets2;
};
process.send(get2Tweets() + " " + process.pid);
