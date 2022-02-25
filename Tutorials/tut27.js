console.log(
  "this is tut of object literals,constructor and object oriented programing"
);

//object literals for creating objects
let car = {
  name: "maruti 800",
  topspeed: 89,
  run: function () {
    console.log("car is running");
  },
};

//what is constructor. constructor is like template for creating objects in javascript.
//we have seen constructor like this
//new date();
// what does new keyword perform? it create new object according to template that we created

// creating constructor for car
function generalcar(givenname, givenspeed) {
  this.name = givenname;
  this.speed = givenspeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
  //this function is useed for anylyze the program.
  this.analyze = function () {
    console.log(
      ` ${this.name} car is slower by ${200 - this.speed} kmph than audi`
    );
  };
}
car = new generalcar("nissan", 100);
car = new generalcar("hondacity", 160);
car = new generalcar("Audi Q7", 240);

console.log(car, car, car, car);
