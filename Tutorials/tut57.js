console.log("this is tut 57 on map in javascript");
//Link for more info about map-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size

//Maps in javascript:we can use any type of key and value.
const myMap = new Map();
const key1 = "mystr",
  key2 = {},
  key3 = function () {};

//setting map value.What we did hear is that we set value for given key and print that key value.
myMap.set(key1, "this is a string");
myMap.set(key2, "this is a blank obj");
myMap.set(key3, "this is a empty function");

// console.log(myMap);
//Getting the values from a map
// console.log(myMap.get(key3)); //you should put key number in get method to get value of that key.
//form tut of harry bhai
let value1 = myMap.get(key1);
// console.log(value1); //it prints the value of one.

//Get the size of the map.
//The value of size is an integer representing how many entries the Map object has. A set accessor function for size is undefined; you can not change this property.
// console.log(myMap.size);

//You can loop using for..of to get keys and values.
for ([key, value] of myMap) {
  // console.log(value);
}
//Get only keys
for (key of myMap) {
  //   console.log(key); //it only prints key in map also we can use myMap.keys() method
}
//Get only values

for (values of myMap.values()) {
  // console.log(values);
}

//you can loop through a map using for each loop
myMap.forEach((value, key) => {
  // console.log("value is", value);
  // console.log("key is", key);
});

//converting map to an array
let myarray = Array.from(myMap); //All the values and keys in form of arrry of mymap obj
console.log(myarray);

//converting map values to array
let myValuesArray = Array.from(myMap.values()); //this method gets you values in form of array in console
console.log(myValuesArray);

//converting map keys to array
let myKeysArray = Array.from(myMap.keys()); //this method gets keys in array from in console
console.log(myKeysArray);
