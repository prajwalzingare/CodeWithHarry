console.log('We are in tut7.js and lets discuss about arrays and objects');
let marks = [34, 23, 24, 93 ,73, 25];
let fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
console.log(marks);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.length);/* lenghth ke liye dot lagana*/
// console.log(Array.isArray(arr));/*array ahe ka nahi show kart true or false */
arr[0] = 'harry';/*APAN REpLACE karu SHAKtO YA MUDE KONTI PAN VALUE ARRRAY MADHUN.*/
let arrelement = arr[1];
console.log('element :', arrelement);
console.log(arr);

let value = fruits.indexOf('Apple');
// console.log(value)

// Mutating or Modifying arrays
fruits.push(3564);/*end me lagta array ke*/
fruits.unshift(1009);/*starting  me number  lagta array ke*/
fruits.pop()  /* last number remove karte array cha*/
fruits.shift()  /* first number remove karte array cha*/
fruits.splice(2, 3);
fruits.reverse()
let fruits2 = ['sapodila','chiku'];
// fruits = fruits.concat(fruits2);/* concat is used to combine to string*/
// console.log(fruits);

let myobj = {
    'first name': 'harry', 
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.isActive)
           
