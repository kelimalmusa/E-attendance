const service = require("./yoklama.service.js");
const get1Tweets = () => {
  const start = process.hrtime();
  const tweets1 = service.get1Tweets();
  const end = process.hrtime();
  return tweets1;
};
process.send(get1Tweets() + " " + process.pid);
