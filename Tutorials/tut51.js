console.log("this tut is on the topic of Iterators in javascript");
//Link to know more-https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-51/
//
//Iterators-it means repetation
function fruitsIterator(values) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < values.length) {
        //we will return below object.
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const myArray = ["Apples", "Grapes", "Bhindi", "chikoo"];
console.log("My array is " + myArray);
//using the Iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);

//if we want to iterate thruough any lopp we use many method like
//while(),do..while(),for(),for..of(),for..in(),foreach(),map() and recently new method get add and that method is Itearators
//Iterators can be use with string and with object.
