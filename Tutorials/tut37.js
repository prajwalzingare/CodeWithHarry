console.log("this is tut 37 Callback functions in javascript");
// what is callback function ? function ke andar function is called as call back function

const students = [
  { name: "harry", subject: "javascript" },
  { name: "prajwal", subject: "java" },
];

function enrollStudent(student, callback) {
  //student object de dunga as parameter to main function. settimeout is call back function who takes arrow funtion as input and returns after some interval.
  //callback is function run after enrollStudent callback pakad ke  rakhta hai after doing push it is going to execute.
  //callback pahle execute hoga baki bad me. ⚠⚠ And haa kuch bhi hojaye ye dusre function ko execute nahi hone dega.
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 3000);
}

function getStudents() {
  //Arey bhau students mhanje array banavla ahe tu ani tyachyavar forech lavlas than why are you wondring now proceed.
  //Ye function background me run hota rahega agar callback se pass kiye to otherwise pahle execute hoga according to time that we provide.
  setTimeout(function () {
    let str = "";
    students.forEach(function (key) {
      str += `<li>${key.name}   ${key.subject}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Student has been Added");
  }, 1000);
}

let newStudent = { name: "sami", subject: "java" };

enrollStudent(newStudent, getStudents);
