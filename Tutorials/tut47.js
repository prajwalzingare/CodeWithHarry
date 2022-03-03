console.log("this is tutorial 46 on the topic of Metacharecters in javascript");
//Links to visit for information--
//1.https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-47/
//2.https://www.w3schools.com/jsref/jsref_regexp_formfeed.asp

let regex = /prajwal/; //it get overwrite in next line
//Let look into Metacharecter Symbol.
regex = /^praj/; //this is caret symbol represent the "start with" means from which the word or string start.if it matches it will execute otherwise not.
regex = /per$/; //what $ symbol at the end representing is that "ends with". If given string is ends with given regex data then it is going to execute otherwise not.
regex = /p.ajwal/g; //dot means matches any one charecter exactly one charecter.
regex = /p*ajwal/; //star means matches any zero or more  charecter in string.konti pan charaecter takle tumhi p ani ajwal chya madhat tari ha execute hoil.

regex = /pri?ajwap?l/; //"?" after any words which means ho bhi akta hai ya nahi bhi ho skata hai string me.so uske alava konsa bhi word add kar diya uske jagaha fir oo null return karga ya error throw karga."?" after character means that character is optional
regex = /p\*ajawal/;

let str = "prajwal is good boy and prajwal is a webdevloper";

result = regex.exec(str);
console.log("This is result from regx ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not matches the expression ${regex.source}`
  );
}
