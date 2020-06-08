


const service = require("./courses.service.js");
const getCourses = () => {
  const start = process.hrtime();
  const teachers = service.getAllCourses();
  const end = process.hrtime();
  return teachers;
};
process.send(getCourses() + " " + process.pid);

































const Sfn2 = () => {
  const a = process.hrtime();
  console.log("2  " + a);
  console.log("2 başlıyor");
  for (let i = 0; i < 100000; i++) {}
  console.log("2 Bitiyor");
  const b = process.hrtime();
  console.log("2  " + b);
  return 2;
};
process.send(Sfn2() + "  " + process.pid);
