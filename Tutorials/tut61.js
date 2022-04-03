console.log("Javascript Wall clock");
//We have to create wall clock

//We create the function for time
function currentTime(params) {
  //Now we acess the date by new date
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  //innerhtml change karne ke liye dom ki
  let time = hh + ":" + mm + ":" + ss + session; //declear the variable.
  document.getElementById("time").innerHTML = time;

  setTimeout(() => {
    // console.log("prajwal");
    currentTime();
  }, 1000);
}

currentTime();
