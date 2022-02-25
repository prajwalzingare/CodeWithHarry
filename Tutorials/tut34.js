console.log("This is tut 34 Asynchronus Programing");
// asyn/await callbacks promises types os asynchronus programing

setTimeout(() => {
  for (let index = 0; index < 4; index++) {
    const element = index;
    console.log("this is index number" + index);
  }
}, 1000);

console.log("done printing");

// Asynchronous code does not have to wait; the program can continue to run. The asynchronous programming makes it possible to express waiting for long-running actions without stopping the program during these actions. JavaScript usually implements this style of programming using callbacks.

// What is the difference between synchronous and asynchronous programming?
// In synchronous programming, one thing happens at a time. When we call a function that performs a long-running action, it returns a result when the action has finished. This stops the program for the time the action takes. In contrast, asynchronous programming allows multiple things to happen at the same time. When we start an action, the program continues to run. When the action finishes, the program is informed and gets the result.
