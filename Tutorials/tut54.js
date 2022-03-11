console.log("This tut is for alaram clock exercise of tut 52.js");
const alarmSubmit = document.getElementById("alarmSubmit");

alarmSubmit.addEventListener("click", setAlaram);
var audio = new Audio(
  "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
);
//function to play the alarm ring tone
function ringBell() {
  audio.play();
}
//this function will run when alarm is set from ui
function setAlaram(e) {
  //to prevent reloding on any fire of event that we apply on button
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  console.log(`Setting the alaram for ${alarmDate}`);
  now = new Date();
  let timeToAlarm = alarmDate - now;
  console.log(timeToAlarm);
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      ringBell();
    }, timeToAlarm);
  }
}
//form validation for date.

const alarm = document.getElementById("alarm");
alarm.addEventListener("blur", () => {
  console.log("blur event fire");
  //now write regex for validating the date
  const regex =
    /[o-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])(0[1-9]1[0-2]):[0-5][0-9]:[0-5][0-9]/;

  console.log(regex.source);
});
