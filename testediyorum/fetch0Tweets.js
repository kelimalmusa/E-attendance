const get0Tweets = () => {
  const start = process.hrtime();
  const tweets0 = service.get0Tweets();
  const end = process.hrtime();
  return tweets0;
};
process.send(get0Tweets() + " " + process.pid);
