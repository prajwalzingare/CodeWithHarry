console.log("this is practice file to understand concept");

// let vastu = {
//   name: "prajwal",
//   age: 9,
//   profession: "webDeveloper",
// };

// // console.log(object);
// let index = "";
// for (key in vastu) {
//   //   console.log(vastu[key]);
//   index += `${key}    ${vastu[key]}`;
// }
// console.log(index);
// document.getElementById("container").innerHTML = index;
// function sourabh(params) {
//   console.log("sourabh pande " + params);
// }
// sourabh = (param) => console.log("sourabh pande " + param);s
// sourabh("cricketer");
// prajwal = () => {
//   prompt("prajwal");
//   alert("click");
//   console.log("prajwal zingare");
// };
// let btn = document.getElementById("sou");
// btn.addEventListener("click", prajwal);
let prajwal = ["pra", "pj", "rz"];
prajwal.forEach(function (object, arr) {
  console.log(object, arr);
});

let pra = [10, 20, 30, 40, 50];
pra.forEach(function (params, index, arr) {
  console.log(params, index, arr[index] + 100);
});
