console.log("this is tutorial on destructuring");
//Destructuring in array
let a, b;
[a, b] = [34, 56];
// console.log(a);
// console.log(a, b);
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 5, 4, 5, 4, 5, 45, 45, 454, 55];
// console.log(a, b, c, d);

// console.log(a);
//Array destructuring
({ a, b, c, ...d } = { a: 34, b: 35, c: 67, d: 89, e: 90 });
// console.log(a, b, c, d);
const fruits = ["apple", "banana", "grapes"];
[a, b, c] = fruits;
console.log(c);
// console.log(fruits);

// Object Destructuring
laptop = {
  model: "Asus",
  age: "2 years",
  gender: "male",
  net: 1223,
};
const { model, age, gender } = laptop; //This is object not array.
console.log(model, age);
