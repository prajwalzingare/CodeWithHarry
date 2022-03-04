console.log("this is tut 48 on regular expression Charecters sets");
//Link to visit=
//1.quantifiers-https://www.w3schools.com/jsref/jsref_regexp_onemore.asp
//2.tut video-https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-48/

//Regular expression
//Basic functions
//Metacharecter Symbols
//Charecters sets==[]
//const regex = /^p/i; //what ^ this indicates that the expression starts with and i represent case insensitivity

//const regex = /pr[yuia]jwal/; //apne bracket be match hone wala charecter likha jo string me present hai to execute hoga warna nahi hoga null return karega.This is charecters sets.or ku match hoga yuia i.e charecter sets me se ek charecter present hai str me.
let regex = /pr[a-z]jwal/; //can be any charecter from a-z.
regex = /pr[^yua]jwal/; //in this charecterset what charet symbol do is that it represent not it is diffrent from outside charecter symbol that we use in metacharecters topic.⚠⚠ we to read this one like "Not of yua "

regex = /pr[a-zA-Z]jwal[0-9]/; //we can have as many charectersets as we want

//Quantifiers -There are so many quantifiers you can lern through docs link is above in description.
regex = /pr{2}ajwal/; //r can occur exactly 2 times.then it will going to execut otherwise not The n{X} quantifier matches any string that contains a sequence of X n's.X must be a number.
regex = /pr{2,3}ajwal/; //2 times r comes or 3 times r come it is acceptable but if you put less than 2 or greater than 3 it throws error or does not match with regex string.

//groupings:-we use paranthisis for groupings

regex = /(pra){2}/; //Aise likhe to pra 2 times ana chahiye in string tub execute hoga otherwise not.
regex = /(pra){2}jwal([0-9]a){2} bha{2}ii/; //Ek most imp gosht ashi ki jo regular expression lihat aha exact toch asayla hava anhi t error yeil means jo word ahe exact toch match zala pahije t hoil nahi t nahi.ek expresssion mhanje ek word dusra lihacha asel t space deun dusra lihacha mag to match hoil string sobat nahi t nahi hoil.

const str = "praprajwal1a2a bhaaii";
let result = regex.exec(str);
console.log("This is result from regx ", result);
if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not matches the expression ${regex.source}`
  );
}
