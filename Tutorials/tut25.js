console.log(
  "this tut belongs to tut21 solution to creating editable div execise 2 "
);
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.
*/
//pahle element create kela mhanje div create kela.
let divElem = document.createElement("div");
//mag text node tyar kela.
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("this is my element.click to edit it");
} else {
  text = document.createTextNode(val);
}
//mag tya text la append kela divelem madhi

divElem.appendChild(text);
//divelem la id dili.
divElem.setAttribute("id", "elem");
//div elem la class dene.
divElem.setAttribute("class", "elem");
//divelem la styling dili.
divElem.setAttribute(
  "style",
  "border:2px solid black; width:154px; margin:34px; padding:23px;"
);
//ata container selectkela karan ya container madhi text box takach ahe.
let container = document.querySelector(".container");
//id first la select kela karan ya id chya pahle aplyala text box takach ahe.
let first = document.getElementById("myfirst");
//insert the element before element with id first
//container madhi mhanje container class madhi divelem pahle takach first id chya samjla.
container.insertBefore(divElem, first);

console.log(divElem, container, first);

//add event listner to the divelem
divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerhtml;

    divElem.innerHTML =
      '<textarea  class="textarea form-control" id="textarea" rows="3"> html </textarea>';
  }
  //listen for blur event on text area blur event mhanje baher click kel ki save hone.
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem('text',textarea.value)
  });
});
