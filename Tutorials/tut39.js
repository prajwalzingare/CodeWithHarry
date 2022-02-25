console.log("tutorial on promises and basic of promises");
//promise:Best video on promises
//resolve
//reject
//pending
function func1(n1, n2) {
  return new Promise((resolve, reject) => {
    if (n1 >= 0 || n2 >= 0) {
      console.log("Function: your promise has been resolved");
      resolve(n1 + n2);
    } else {
      console.log("Function:your promise has not been resolved");
      reject("sorry not fullfilled ");
    }
  });
}
func1(10, -20)
  .then((result) => {
    console.log("Harry:Thanks for resolving " + result);
  })
  .catch((error) => {
    console.log("Harry:very bad" + error);
  });

// prajwal = (n1, n2) => {
//   return new Promise((resolve, reject) => {
//     if (n1 >= 0 && n2 >= 0) {
//       //addition of two numbers
//       resolve(n1 + n2);
//     } else {
//       reject("Numbers are not greter than zero");
//     }
//   });
// };

// prajwal(10, 20)
//   .then((result) => {
//     console.log("Handling success", result);
//   })
//   .then((result) => {
//     console.log("Handling success", result);
//   })
//   .catch((err) => {
//     console.log("Handling error", err);
//   });
