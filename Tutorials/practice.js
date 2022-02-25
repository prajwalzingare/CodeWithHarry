console.log("this is practice file to understand concept");

let vastu = {
  name: "prajwal",
  age: 9,
  profession: "webDeveloper",
};

// console.log(object);
let index = "";
for (key in vastu) {
  //   console.log(vastu[key]);
  index += `${key}    ${vastu[key]}`;
}
console.log(index);
document.getElementById("container").innerHTML = index;
