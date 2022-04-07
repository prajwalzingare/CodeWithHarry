console.log("Tut 63 on Reduce Method");
//Reduce Method
// the reduce() method executes a reducer fumction (that you provide) on each element of the array ,resulting in single output value.

// The reducer function takes four arguments.

// Accumulator
// current vlaue
// current index
// source Array

// example to understand reducer function
var values = [1, 2, 5];
//start  zero se karenge fir prev-0 next-1( value from array)
//now again prev-1 next-2
//prev-3 next-5
//total 9 will be print after looping gets over from array.
var total = values.reduce(function (prev, next) {
  //   console.log(prev);
  //   console.log(next);
  return prev + next;
}, 0);
console.log(total);

var val = [
  [1, 2, 3],
  [4, 5, 6],
];
var tot = val.reduce(function (prev, next) {
  console.log(prev);
  console.log(next);
  return prev.concat(next);
}, []); //initial empty array and 123 wala array fir uske bad next hoyega nad concat hoke return karega.
console.log(tot);
//3rd example
var fruits = ["Apple", "orange", "banana", "Watermelon"];
var redu = fruits.reduce((prev, next) => {
  console.log(prev);
  console.log(next);
  return prev + next;
}, {});
console.log(redu);
// console.log(fruits);
