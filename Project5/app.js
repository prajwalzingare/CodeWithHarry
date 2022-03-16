console.log("This is project 5 on CvScrener");
//Data is an array of object which contains information about object
const data = [
  {
    name: "prajwal zingare",
    age: "23",
    city: "Nagpur",
    language: "Javascript",
    framework: "React",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "prajwal",
    age: "24",
    city: "Nagpur",
    language: "Java",
    framework: "php",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "sami",
    age: "21",
    city: "Nagpur",
    language: "Javascript",
    framework: "React",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "sami zingare",
    age: "20",
    city: "Nagpur",
    language: "Javascript",
    framework: "angular",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "sourabh Pande",
    age: "23",
    city: "Nagpur",
    language: "Javascript",
    framework: "Vue",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];
//CV iterator
function cvIterator(profiles) {
  //we should intialize with zero
  let nextindex = 0;
  //we are returning an object which is function.
  return {
    next: function () {
      return nextindex < profiles.length
        ? { value: profiles[nextindex++], done: false }
        : {
            done: true,
          };
    },
  };
}

const candidates = cvIterator(data);
//pahle ku function call kiya kuki jub app starting me page load karoge with out click to ye function run hona chahiye isliye.
nextCV();
//Button listner for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);
function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src="${currentCandidate.image}"/>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age}</li>
    <li class="list-group-item">${currentCandidate.city}</li>
    <li class="list-group-item">${currentCandidate.language}</li>
    <li class="list-group-item">${currentCandidate.framework}</li>
  </ul>`;
  } else {
    //After end of candidate it gives you alert
    alert("End of candidate applications");
    //it will relod the apllication back to original posiyion
    window.location.replace("index.html");
  }
}
