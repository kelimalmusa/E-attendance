const get0Tweets = () => {
  const start = process.hrtime();
  console.log("start fetch Tweets2", start);
  for (let i = 0; i < 10000000; i++) {}
  const end = process.hrtime();
  return "end Fetch tweets2 " + end;
};
process.send(get0Tweets() + " " + process.pid);
