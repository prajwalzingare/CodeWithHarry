console.log("Topic on prototype inheretance");
let arr = ["Prajwal", "Zingare"];
let object = {
  name: "prajwal",
  age: 23,
  city: "Bhiwapur",
  getintro: function () {
    console.log(this.name + " from " + this.city);
  },
};
console.log(object.hasOwnProperty("city"));
console.log(arr);
