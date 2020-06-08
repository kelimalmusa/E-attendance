console.log("paralel olmayan biçimde ");
const getStudents = () => {
  console.log("start fetch users", process.hrtime());
  const start = process.hrtime();
  for (let i = 0; i < 10000000000; i++) {}
  const end = process.hrtime();
  console.log("end Fetch Users " + end);
};

const getTeachers = () => {
  console.log("start fetch teachers", process.hrtime());
  const start = process.hrtime();
  for (let i = 0; i < 1000000000; i++) {}
  const end = process.hrtime();
  console.log("end Fetch Teachers " + end);
};

const getCourses = () => {
  console.log("start fetch courses", process.hrtime());
  const start = process.hrtime();
  for (let i = 0; i < 10000000000; i++) {}
  const end = process.hrtime();
  console.log("end Fetch Coursrs " + end);
};

getStudents();
getTeachers();
getCourses();
// p1.on("message", (message) => console.log(message));
// p2.on("message", (message) => console.log(message));
// p3.on("message", (message) => console.log(message));
// paralel işlemin bitişi

// const start2 = process.hrtime.bigint();
// Promise.all([fn1(), fn2(), fn3()]).then(() => {
//   const end2 = process.hrtime.bigint();
//   const asenkronfark = console.log("asenkron fark", end2 - start2);
// });

const Sfn1 = () => {
  const a = process.hrtime();
  console.log("1  " + a);
  console.log("1 başlıyor");
  for (let i = 0; i < 100; i++) {
    console.log("user");
  }
  console.log("1 Bitiyor");
  const b = process.hrtime();
  console.log("1  " + b);
  return 1;
};

const Sfn2 = () => {
  const a = process.hrtime();
  console.log("2  " + a);
  console.log("2 başlıyor");
  for (let i = 0; i < 10; i++) {
    console.log("teacher");
  }
  console.log("2 Bitiyor");
  const b = process.hrtime();
  console.log("2  " + b);
  console.log("2 başlıyor");
  return 2;
};
// console.log("paralel olmayan biçimde ");

// console.log(Sfn1() + "    " + process.pid);
// console.log(Sfn2() + "    " + process.pid);
