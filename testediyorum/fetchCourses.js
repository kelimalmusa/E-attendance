



const service = require("./teachers.service.js");
const getTeachers = () => {
  const start = process.hrtime();
  const courses = service.getAllTeachers();
  const end = process.hrtime();
  return courses;
};
process.send(getTeachers() + " " + process.pid);

































const Sfn3 = () => {
  const a = process.hrtime();
  console.log("3  " + a);
  console.log("3 başlıyor");
  for (let i = 0; i < 1000000; i++) {}
  console.log("3 Bitiyor");
  const b = process.hrtime();
  console.log("3  " + b);
  return 1;
};
process.send(Sfn3() + "  " + process.pid);
