//Regular expression are patterns used to match characetert combination in string.in javascript regular expression are also objects. these patterns are used with exec() and test() methods of Regexp()

//links to visit for more information
// https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-46/
// https://javascript.info/regexp-introduction

console.log("javascript regular Expression and releted Function"); //string litreal what is that the data is in string is called string litreal
//this is regular expression litreal in javascript which is written in double slash
let reg = /prajwal/;
//let reg = /prajwal/g; //g is for global flag it is used to find the index in string for next next index with proper manner
//let reg = /prajwal/i; //i is flag use for case insensitivity which means apaka word capital ho ya small koi farak nahi apdta bus name barobar hona chahiye.
// console.log(reg);
// console.log(reg.source); //what is source -: masala in regular expression.information inside slashes

//Functions to match expression
let s = "this is prajwal zingare and prajwal bhai";

//1. exec() - This function will return an aray for match or null for no match.
let result = reg.exec(s);

// if (result) {
//   console.log(result);
//   console.log(result.index);
//   console.log(result.input);
// }
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);

//2.test() is another function of regular expression and It returns true or false.⚠⚠❤❤
let result2 = reg.test(s); //Agar string me apka regular expression ka data nahi ata then it will return null.
// console.log(result2); //this will only print true if the "reg" is there in the string "s"

//3. match()= it will return an array of "results" or "null"
//let result3=reg.match(s).....this is wrong!!
let result3 = s.match(reg); //this is right
// console.log(result3);

//4. Search()--This method will tests for a match in a string. It returns the "index of the match", or "-1" if the search fails
//let result4=reg.search(s).....this is wrong!!
let result4 = s.search(reg); //this is right
// console.log(result4);

//5. replace()--This method will executes a search for a match in a string, and replaces the matched substring with a replacement substring.
let result5 = s.replace(reg, "sami"); //now this will only replace first word of regular expression with given one But⚠⚠ if you put global tag then this will going to replace all words with given words in string.
// console.log(result5);
