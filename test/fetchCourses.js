const getStudents = () => {
  console.log("start fetch courses", process.hrtime());
  const start = process.hrtime();
  for (let i = 0; i < 1000000000; i++) {}
  const end = process.hrtime();
  return "end Fetch courses " + end;
};
process.send(getStudents() + " " + process.pid);

// const Sfn3 = () => {
//   const a = process.hrtime();
//   console.log("3  " + a);
//   console.log("3 başlıyor");
//   for (let i = 0; i < 1000000; i++) {}
//   console.log("3 Bitiyor");
//   const b = process.hrtime();
//   console.log("3  " + b);
//   return 1;
// };
// process.send(Sfn3() + "  " + process.pid);
