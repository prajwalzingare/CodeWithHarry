//Link to visit for more info-https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements#:~:text=Both%20for..in%20and%20for,values%20of%20an%20iterable%20object.
//Property accessors to acces the property important.
console.log("this is tut 56 on the topic of for of loop and for in loop");
people = ["prajwal", "sami", "sourabh", "kunal"];
// console.log(people);
for (let index = 0; index < people.length; index++) {
  const element = people[++index];
  //   console.log(element);
}
//basically it is imoprtant-"loop" thats why true hui condition to loop firse run hoga or condition fiir se start hogi.thats why output aisa aya.
//self practice for understanding for in loop and for of loop.

// for...in Loop => iterates over the index in the array.
// for...of Loop => iterates over the object of objects.
for (name in people) {
  //   console.log(people[name]); //this shows only value not key
  //   console.log(people); //this gives only pure array object key and value pair.
  //   console.log(name); //this shows only pure index but not value
}
//it is disadvantages of for of loop that you can not print index of array object.
//But it is possible with this link-https://stackoverflow.com/questions/34348937/access-to-es6-array-element-index-inside-for-of-loop must go through it
for (name of people) {
  //   console.log(people[name]); //undefined
  //   console.log(people);//pure array
  //   console.log(name); //it gives you the value in array.
}

//How to get keys in for of loop?
// to get value and key at time in for of loop.
// for (let [index, value] of people.entries()) {
//   console.log(index, value);
// }
//Now try for object all this
// const prajwal = {
//   name: "prajwal",
//   age: 22,
//   passion: "coding",
//   run: function () {
//     console.log("prajwal is good boy");
//   },
//   village: "bhiwapur",
// };

// for (obj in prajwal) {
//   // console.log(obj); //it gives you key in obj
//   // console.log(prajwal); //it gives you whole object by iterating thruough it 5 times it print object five times.
//   // console.log(prajwal[obj]);//Print all the values in object.
// }
//Iterable is an object which can be looped over or iterated over with the help of a for loop.

//Final conclusion on the object we cant iterate through for of loop. use for in loop.
// for (obj of prajwal) {
// console.log(obj); //apan object var iterat nahi karu shakat for of loop ni
// console.log(prajwal);//Same cant iterate on object with the for of loop.
// console.log(prajwal[obj]); //cant iterate on object.
// console.log(index, value);
// }

//Now practice from tutorial of code with harry

//Must read this link for revise concept and this link also contains the all method of looping through object with proper manner.also contains the info og entries,obj.keys() and obj.values method-https://flexiple.com/loop-through-object-javascript/

//concept of json and js object-https://medium.com/@alifabdullah/never-confuse-json-and-javascript-object-ever-again-7c32f4c071ad

//Objects in JavaScript have an internal property known as prototype.

//Now let's see the data in tutorial
//ITERTING AN OBJECT
const obj = {
  name: "prajwal",
  language: "javascript",
  hobbies: "Web devlopment",
};
// console.log(obj);
//iterating an object with treditional for loop

for (let index = 0; index < Object.keys(obj).length; index++) {
  // const element = obj[Object.keys(obj)[index]]; //print the value.
  // const element = Object.values(obj)[index];//print the string of values
  // const element = Object.values(obj); //print the array of values.
  // const element = Object.keys(obj)[index]; //print the string of keys.
  // const element = Object.keys(obj); //print the array of keys.
  // console.log(element);
}

//iterating an object using for in loop

for (keys in obj) {
  //key is string hear
  // console.log(obj[keys]); //prints the value iterating on obj with keys
  // console.log(obj); //prints the object 3 times as it ia loop thats why
  // console.log(keys); //print all the keys in object.
  // console.log(keys[1]); //print the first charecter of keys
  // console.log(obj.name); //print the value of name
  // console.log();
}
//Iterating a string
//We can use for in with strings to loop through all the charecter.
myString = "This is my string";
// for (let char in myString) {
//   console.log(myString[char]); //prints the each and every words
//   console.log(char); //prints the index
//   console.log(myString); //prints the string iterating for each and every time.
// }

//Quiz:Use traditional for loop to iterate through the same string
// for (let index = 0; index < myString.length; index++) {
//   const element = myString[index];
//   console.log(element);
// }

//for of loop
for (let name of people) {
  console.log(name);
}
