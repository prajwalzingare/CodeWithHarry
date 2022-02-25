console.log('We are at string properties method and template tut 6');
const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading </h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);/*konse number ka charecter hai show karta hai*/
// console.log(html.indexOf('is'));
// console.log(html.lastIndexOf('is'));
// console.log(html.charAt(3));/*kis number pe konsa charecter hai oo dikhata hai*/
// console.log(html.endsWith('str2'));
// console.log(html.includes('is'));/*usme oo word hoga to true nahi to fals dikahyega*/
// console.log(html.substring(1,6)); /*n-1 charecter dukhta hi*/
// console.log(html.slice(0, 6))/*jaha se chalu whaha pe khatam no n-1*/
// console.log(html.split(' '));
// console.log(html.replace('this', 'it'));
// console.log(html.fromCharCode('this'));
let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;            
