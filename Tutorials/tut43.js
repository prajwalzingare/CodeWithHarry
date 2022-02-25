console.log("this is tut 43  on topic of async and await");
//for more info about this tut == https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-43/

//The Async Keyword:-
// We use the async keyword with a function to represent that the function is asynchronous. The async function always returns a promise.
// Here is the syntax of async function is:
// async function name(param1, param2, ...paramN) {
// statements
// }
// async function example
// async function func() {
//   console.log("Async/Await tutorial.");
//   return Promise.resolve(1);
// }
// func().then(function (res) {
//   console.log(res);
// });

//async ky karta hai ek ✔✔✔ promise return karta hai iska matlab async likhne ke bad kisi bhi function ke samne wo promise me convert ho jata hia which means promise cna resolve or reject.

//await wala kam asynchronusly handle hota hai
//async promise return karega jisko .then karke print karna padega but usme bhi ek promise ka intazar kiya hia humne jo return karega response from url that we add.
async function prajwal() {
  //async ke andar kya hoga await likhenge ku likhenge ku ki hum async ke andar ek promise resolve honeka ka wait kar sakte hai.
  console.log("inside prajwal  function");
  //await dikhne ke bad ye kya karga muh mod ke wapus chala jayega or pura data execute karega fir idhar wapus ayega
  const response = await fetch("https://api.github.com/users"); //apun ne idhar ye kiya kiya url se data fetch karne ki koshish ki fetch use karke.
  console.log("Befor response");
  const users = await response.json(); //this also returns promise to write data as object.
  console.log("users resolved");
  //async wali promise return pe resolve hojayegi or fir data console log hoga.
  return users;
}
console.log("Before calling prajwal");
let a = prajwal();
console.log("After calling prajwal");
console.log(a);
//mai kya karna chahat hu after resolving all promises mai data ko print karna chahta hu .then ki madat se humne data print kiya.
//a.then resolve nahi hoga promise pending rahi to
a.then((data) => console.log(data));
console.log("last line of this js file");

//Benefits of using an async function:-
// Debugging using promises sometimes is very hard because the debugger will not step over the asynchronous code. But the Async/await makes this very easy because it is just like synchronous code to the compiler.
// As we can see from the example above, the code looks very simple compared to the code using plain promises, with chaining and callback functions.
// Error handling is simpler in async functions.
// So, in this tutorial, we have learned about async and await keywords. Async/await provides a nice, simplified way to write async code that is easy to read and maintain.
