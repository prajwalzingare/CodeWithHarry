console.log("This is tut 58 on topic of sets in js");
//link to visit for  more info-https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-58/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//set store unique values.
const mySet = new Set(); //initializing an empty set. new set create kiya apan ne.
// console.log(mySet);
// let sym = Symbol(1);
// console.log(sym);
//Adding the values to set
//it takes unique values. you cant add same value like string numberor boolen but can add same object,array
mySet.add("this");
mySet.add(true);
// mySet.add(true);cant add 2 because same thing cant add in same set.
// mySet.add("thi");
// mySet.add(11);
// mySet.add(11);
mySet.add([1, 2, 3]);
// mySet.add([1, 2, 3]);
mySet.add((p = { name: "prajwal", run: function prajwal(params) {} }));
// mySet.add((p = { name: "prajwal", run: function prajwal(params) {} })); //Bahar refrence diye to same print nahi hoga otherwise same name doge fir bhi oo set me add hoga.uski entrie dikhegi.
mySet.add("my name");
console.log(mySet);
console.log(mySet.size); //we can check size
console.log(mySet.has("this")); //has method check karta hai ki oo set me value hai ki nahi hogi to true otherwise false.
console.log(mySet.has(p));
console.log("befor removing", mySet);
// console.log(mySet.delete()); //flase return karega kuki kuch aisa hai hi nahi deleter karne ki liye.
console.log(mySet.delete("this")); //true return karega kuki "this" is present hai set me jo delete hoga.
console.log("After removing", mySet); //remove ho ga jo delet kiya.
//Dekhiye bhai sahab apne object ko refrence diya to it is not going toprint same but without refrence it is going to except.
// let p = { a: 2, b: 3 };
// let a = [1, 2, 3];
// let mySet2 = new Set([1, "prajwal", true, a, a]);
// console.log(mySet2);

//Iterating the set
for (obj of mySet) {
  console.log(obj); //prints all item.
}
//iterate with the help of foreach loop.
mySet.forEach((obj) => {
  console.log(obj);
});

//quiz :can you use Rray.from(mySet) to convert set into an array.
let my = Array.from(mySet);
console.log(my);
//solved .
