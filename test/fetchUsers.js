const getStudents = () => {
  console.log("start fetch users", process.hrtime());
  const start = process.hrtime();
  for (let i = 0; i < 10000000000; i++) {}
  const end = process.hrtime();
  return "end Fetch Users " + end;
};
process.send(getStudents() + " " + process.pid);

// const Sfn1 = () => {
//   const a = process.hrtime();
//   console.log("1  " + a);
//   console.log("1 başlıyor");
//   for (let i = 0; i < 1000000; i++) {}
//   console.log("1 Bitiyor");
//   const b = process.hrtime();
//   console.log("1  " + b);
//   return 1;
// };
// process.send(Sfn1() + "  " + process.pid);
