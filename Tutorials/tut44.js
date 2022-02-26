console.log(
  "this is tutorial 44 on Error handling and try catch in javascript"
);
//for more info visit-https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-44/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
//types of error-https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492

// let a = "prajwal";
let a = undefined;
//The not-equal-to operator (!=) returns true if the operands don't have the same value; otherwise, it returns false.
//why we throw error because when server give wrong info then ther is need of showing erro to user.

if (a != undefined) {
  throw Error("this is not undefined");
} else {
  console.log("this A is undefined");
}

try {
  //What is try it means try to do something if you will do it good otherwise it is error.
  // fdjhg;
  null.console;
  console.log("We are inside try blog");
  harry();
} catch (error) {
  //what catch do is that it helps you print your error as text or what you want to print.
  //if in our code error is ocured then it will shoe warning but with help of catch we can do whatever we want to do.
  console.log("Are you okey");
  console.log(error.name);
  console.log(error.message); //it shows the message
  console.log(error.stack);
} finally {
  //finally is run in any condition.
  console.log("finally we can execute the code");
}
