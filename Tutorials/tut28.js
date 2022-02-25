console.log("This is tutorial 28 object prototype in javascript");

// Object literal : Object.prototype
// let obj = {
//   name: "harry",
//   channel: "Code With Harry",
//   address: "Mars",
// };

function Obj3(givenName) {
  this.name = givenName;
}

Obj3.prototype.getName = function () {
  return this.name;
};

Obj3.prototype.setName = function (newName) {
  this.name = "newName";
};

let obj2 = new Obj3("Rohan Das");
console.log(obj2);
