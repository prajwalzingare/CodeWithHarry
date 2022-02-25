//https://www.w3schools.com/xml/ajax_intro.asp go to this link and get idea about ajax in more detail.

// AJAX is not a programming language.

console.log("ajax tut in one video");
// Ajax stands for Asynchronous JavaScript And XML  Ajax loads the data from the server and updating the parts of a web page selectively without reloading the whole page.

// AJAX use of the built-in browser XMLHttpRequest (XHR) objects to send and receive information to and from a web server asynchronously, in the background, without blocking the page or interfering with the user's experience.

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("You have clicked the fetchbutton");

  //instantiate an xhr object ye jaruri hai kuki iskebina object create nahi hota.
  const xhr = new XMLHttpRequest();

  //open the object get request and link for kaha se data ayega or anekebad oo aynchronus bhi hoga isliye true page ko block nahi karga true likha to. what is get--it means only we have to fetch data and post means data bhi bhejenge.
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  //now lets understand post request this
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");

  //what to do on progress.you can use this method or not it is not mendetory it only showes the progress
  xhr.onprogress = function () {
    console.log("on progresss");
  };

  //what to do when response is ready after fetching data from url what to do we have to print it on console or in page.
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("error");
    }
  };

  //send the request
  params = `{"name":"prajwal123","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("we are done");
}

let backUpBtn = document.getElementById("backupBtn");
backUpBtn.addEventListener("click", backClickHandler);
function backClickHandler() {
  console.log("You have clicked the backUpbutton");

  //instantiate an xhr object ye jaruri hai kuki iskebina object create nahi hota.
  const xhr = new XMLHttpRequest();

  //open the object get request and link for kaha se data ayega or anekebad oo aynchronus bhi hoga isliye true page ko block nahi karga true likha to. what is get--it means only we have to fetch data and post means data bhi bhejenge.

  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

  //what to do on progress.you can use this method or not it is not mendetory it only showes the progress
  xhr.onprogress = function () {
    console.log("on progresss");
  };

  //what to do when response is ready after fetching data from url what to do we have to print it on console or in page.
  xhr.onload = function () {
    if (xhr.status === 200) {
      let prajwal = JSON.parse(this.responseText);
      console.log(prajwal);
      let list = document.getElementById("list");
      str = "";

      //Given that ⚠⚠for...in⚠⚠ is built for iterating object properties. it helps to iterate through all properties of object.
      //"of" for array and "in" for object
      for (key in prajwal) {
        str += `<li>${prajwal[key].id} </li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("error");
    }
  };

  //send the request
  xhr.send();
  console.log("we are done");
}
