console.log("this is tut49 on topic of Shorthand charecter classes ");
//link for more details:-
//1.https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-49/
//2.https://www.w3schools.com/jsref/jsref_regexp_wordchar_non.asp
//3.word boundary-:https://javascript.info/regexp-boundary
//CHARECTER CLASEES
let regex = /\waj/; //The \w metacharacter matches word characters A word character is a character a-z, A-Z, 0-9, including _ (underscore). \waj aj hoga to execute karega nahi to nahi karega.spaces also count so be carefull about that you.
regex = /\w+a/; //\w+ means one or more word characters.
regex = /\W/; //Non word character.Space is non word charecter.and capital W represent the word charecter inside the string.
regex = /\W+/; //\W+ means more than one Non word character."+" represent the whole charecter that present in the string.
regex = /\d/; //\d means digit
regex = /\d+/; //\d+ means more than one digit
regex = /\D/; //The \D metacharacter matches non-digit characters.means alphabet
regex = /\D+/; //+ represent all charecter after that.
regex = /\s/; //Match whitespace character.means spce and gives space index.
regex = /\s+23/; //\s+ means match one or more than one whitespace characters
regex = /\s+23/;
regex = /al\b/; // word boundary. this create boundary for words.agar al ke bad kuch nahi hoga to execute hoga nahi to nahi hoga.

//ASSERTIONS
regex = /p(?=r)/; //p ke bad r hoga to execute hoga varn anhi hoga
regex = /p(?!a)/; //p ke bad r sodun kuch bhi chale ga because this is "!" not symbol
const str = "prajwalbh ai1 23 ";
let result = regex.exec(str);
console.log("This is result from regx ", result);
if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not matches the expression ${regex.source}`
  );
}
