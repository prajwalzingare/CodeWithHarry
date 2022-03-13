console.log("this is tutorial 53 on topic of Generators");

//Links for more detail-https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-53/
//https://www.geeksforgeeks.org/javascript-generator/
//Generators in javascript
//Generators kya karte hai on the fly value ko generate karte hai yield karte hai
//1-1B
//array banakar store karne ki jarurat nahi hai app generator ka use kar sakte hai.
function* numbergen() {
  let i = 0;

  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  while (true) {
    yield i++; //.toString(); //to string is used to convert any value to string.
  }
}
const gen = numbergen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
