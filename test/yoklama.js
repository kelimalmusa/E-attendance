const get0Tweets = () => {
  const start = process.hrtime();
  for (let i = 0; i < 1000000000; i++) {}
};

const get1Tweets = () => {
  const start = process.hrtime();
  for (let i = 0; i < 1000000000; i++) {}
  const end = process.hrtime();
};

const get2Tweets = () => {
  const start = process.hrtime();
  for (let i = 0; i < 10000000000; i++) {}
  const end = process.hrtime();
};

const cp = require("child_process");

// console.log("paralel biçimde ");
// const p1 = cp.fork("fetch0Tweets.js");
// const p2 = cp.fork("fetch1Tweets.js");
// const p3 = cp.fork("fetch2Tweets.js");

// p1.on("message", (message) => console.log(message));
// p2.on("message", (message) => console.log(message));
// p3.on("message", (message) => console.log(message));
console.log("start fetch Tweets0", process.hrtime());
get0Tweets();
console.log("End of fetch Tweets0", process.hrtime());
console.log("start fetch Tweets1", process.hrtime());
get1Tweets();
console.log("End of fetch Tweets1", process.hrtime());
console.log("start fetch Tweets2", process.hrtime());
get2Tweets();
console.log("End of fetch Tweets2", process.hrtime());

// console.log("paralel olmayan biçimde ");
// const getStudents = () => {
//   console.log("start fetch users", process.hrtime());
//   const start = process.hrtime();
//   for (let i = 0; i < 10000000000; i++) {}
//   const end = process.hrtime();
//   console.log("end Fetch Users " + end);
// };

// const getTeachers = () => {
//   console.log("start fetch teachers", process.hrtime());
//   const start = process.hrtime();
//   for (let i = 0; i < 1000000000; i++) {}
//   const end = process.hrtime();
//   console.log("end Fetch Teachers " + end);
// };

// const getCourses = () => {
//   console.log("start fetch courses", process.hrtime());
//   const start = process.hrtime();
//   for (let i = 0; i < 10000000000; i++) {}
//   const end = process.hrtime();
//   console.log("end Fetch Coursrs " + end);
// };

// getStudents();
// getTeachers();
// getCourses();
