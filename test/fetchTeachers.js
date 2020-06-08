const getStudents = () => {
  console.log("start fetch teachers",process.hrtime());
  const start = process.hrtime();
  for (let i = 0; i < 1000000000; i++) {}
  const end = process.hrtime();
  return "end Fetch teachers " + end;
};
process.send(getStudents() + " " + process.pid);

// const Sfn2 = () => {
//   const a = process.hrtime();
//   console.log("2  " + a);
//   console.log("2 başlıyor");
//   for (let i = 0; i < 100000; i++) {}
//   console.log("2 Bitiyor");
//   const b = process.hrtime();
//   console.log("2  " + b);
//   return 2;
// };
// process.send(Sfn2() + "  " + process.pid);
