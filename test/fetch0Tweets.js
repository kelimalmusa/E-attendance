const getStudents = () => {
  const start = process.hrtime();
  console.log("start fetch Tweets0", start);
  for (let i = 0; i < 10000000000; i++) {}
  const end = process.hrtime();
  return "end Fetch tweets2 " + end;
};
process.send(getStudents() + " " + process.pid);
