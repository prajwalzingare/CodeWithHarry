console.log("this is tutorial 39b js copy of tut37.js");
const students = [
  { name: "harry", subject: "javascript" },
  { name: "prajwal", subject: "java" },
];

function enrollStudent(student) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (key) {
      str += `<li>${key.name} ${key.subject}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Student has been Added");
  }, 1000);
}

let newStudent = { name: "sami", subject: "java" };

enrollStudent(newStudent)
  .then(() => {
    getStudents();
  })
  .catch(() => {
    console.log("error occured");
  });

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
