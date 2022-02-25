console.log("this is element selectors tut14.js");
/*
single element selector
multiple element selector
*/
// single element dom selector
let element = document.getElementById("first");
// element=element.className
// element=element.childNodes
// element=element.parentNode;
// element.style.color = "red";
// element.style.backgroundColor ='blue'
// element.innerText = 'harry is good boy'
element.innerHTML = "<b> harry</b>";

// console.log(element);

let sel = document.querySelector('#first');
//  sel = document.querySelector('.child');
//  sel = document.querySelector('div');
// sel.style.color = 'green';
// sel.style.backgroundcolor = 'blue';

console.log(sel);

// MULTI ELEMENT SELECTOR
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');

elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
   console.log(element);
   element.style.color = 'blue';
});

// console.log(elems[0].getElementsByClassName('child'));
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}