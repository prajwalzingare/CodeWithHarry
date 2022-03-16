console.log("this tut is on the topic of Iterators in javascript");
//Link to know more-https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-51/
//https://www.youtube.com/watch?v=2oU-DfdWM0c
//Link for ++ operator-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
//2)video link-https://www.youtube.com/watch?v=d4W6-mphL7c

//Iterators-it means repetation
function fruitsIterator(prajwal) {
  let nextIndex = 0;
  //we will return object.
  return {
    next: function () {
      if (nextIndex < prajwal.length) {
        //we will return below object.
        return {
          value: prajwal[nextIndex++], //++ postfix increment returns the value before incremanting.Basically original value return krta hai increment hone ke pahle ki.and prefix operator kya karta hai sidha original value return karta hai increse hui naki main value.got the point.
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

const myArray = ["Apple", "Grapes", "Bhindi", "chikoo"];
// console.log("My array is " + myArray);
//using the Iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
// console.log(fruits.next().value);
// console.log(fruits.next().value);
// console.log(fruits.next().value);

//if we want to iterate thruough any lopp we use many method like
//while(),do..while(),for(),for..of(),for..in(),foreach(),map() and recently new method get add and that method is Itearators
//Iterators can be use with string and with object.
