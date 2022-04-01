console.log("this is tut 59 on topic of symbol in js");
//link for more info-https://www.google.com/url?sa=i&url=https%3A%2F%2Fjavascript.plainenglish.io%2Fprimitive-and-reference-data-types-in-javascript-2b3916cae1ef&psig=AOvVaw0pE3TmBqLlSGirFTmQnnGD&ust=1648782484787000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiNxMiv7_YCFQAAAAAdAAAAABAD
//symbols
const sym1 = Symbol("hi"); //we can add identifier in symbol
// console.log(typeof sym1);
const s1 = Symbol("prajwal"); //jub bhi hum aise symbol likhte hai to oo ek naya primitive generate karta hai.
const s2 = Symbol("prajwal");
// console.log(s1 === s2); //false
//unique key banana mushkil hoja tha primitive data type ki madat se isliye symbol introduce hue
const a = "this is";
const b = "this is";
// console.log(a === b); //true
// console.log(null === null);
// console.log(undefined === undefined); //primitive data type iske help se app ek uniq chiz nahi bana sakte.

const k1 = Symbol("identifier for k1"); //identifier add kiye.
const k2 = Symbol("for k2");

myobj = {};
myobj[k1] = "prajwal"; //apan ne value add ki k1 ki using this format.
myobj[k2] = "prajwal bhai";
myobj["name"] = "good boy";
//symbol ko use karte hai koi bhi aisa primitive genrate karne ke liye jo ki unique ho.
console.log(myobj);
//for in loop ke andar symbol ko ignore kiya jata hai.
for (key in myobj) {
  console.log(key, myobj[key]);
}
//again symbol ignore hua idhar.
console.log(JSON.stringify(myobj));

let myob = object();
console.log(myob);
