console.log("Postman clone by js");
//Utility function
//1.function to get Dom element from string
function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}
//Initializing the paramcount.
let addedParamCount = 0;
//Parameterbox and jsonBox
let parametersBox = document.getElementById("parametersBox");
let requestJsonBox = document.getElementById("requestJsonBox");
//json and radio Button
let jsonRadio = document.getElementById("jsonRadio");
let paramsRadio = document.getElementById("paramsRadio");
//Default display
parametersBox.style.display = "none";
// requestJsonBox.style.display = "none";

//if user click on json radio button parameters box should hide and json box should appear
jsonRadio.addEventListener("click", () => {
  console.log("run");
  parametersBox.style.display = "none";
  requestJsonBox.style.display = "block";
});

//if user Click on coustom parameters button then json box should hide and parameters box should appear.
paramsRadio.addEventListener("click", () => {
  console.log("check Run");
  parametersBox.style.display = "block";
  requestJsonBox.style.display = "none";
});

//If user click on plus button ,add more parameters.
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let string = `<div class="d-flex my-3">
  <label for="url" class="col-sm-2 col-form-label">Parameter ${
    addedParamCount + 2
  }</label>
  <div class="col-md-4 mx-2">
    <input
      type="text"
      class="form-control"
      id="parameterKey${addedParamCount + 2}"
      placeholder="Enter Parameter  ${addedParamCount + 2} Key"
    />
  </div>
  <div class="col-md-4 mx-2">
    <input
      type="text"
      class="form-control"
      id="parameterValue${addedParamCount + 2}"
      placeholder="Enter Parameter  ${addedParamCount + 2} value"
    />
  </div>
  <button  class="btn btn-primary ms-3 deleteParam">-</button>
</div>`;
  //Convert the string to dom node IT should print in form of node not in form of string.
  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);
  // console.log(paramElement);
  // console.log(string);

  //add an event listner to - button to remove parameter box
  let deleteParam = document.getElementsByClassName("deleteParam");
  for (item of deleteParam) {
    item.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      // console.log("run");
    });
  }
  addedParamCount++; //yaha se addedpamacount increse hoga and value fir 1+2=3 hoyegi
});

//if the user click on submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let responsePrism = document.getElementById("responsePrism");
  responsePrism.innerHTML = "Your response is fetching...please wait 😊";
  console.log("run");
  //fetching all the value user has entered
  let url = document.getElementById("url").value;

  //if you want the value of radio type button then must add this.select with query selector
  let requestType = document.querySelector(
    "input[name='requestType' ]:checked"
  ).value;
  let contentType = document.querySelector(
    "input[name='contentType' ]:checked"
  ).value;

  //If user has used params option insted of json ,collect all the parameters in an object
  if (contentType == "params") {
    data = {};
    for (let i = 0; i < addedParamCount + 1; i++) {
      console.log("run");
      if (document.getElementById("parameterKey" + (i + 1)) != undefined) {
        //undefined nahi hai tub age badhe varna na badhe
        let key = document.getElementById("parameterKey" + (i + 1)).value;
        let value = document.getElementById("parameterValue" + (i + 1)).value;
        console.log(key);
        console.log(value);
        data[key] = value;
        console.log(data);
      } else {
        // console.error("stop");//just for check What happens hear.
      }
    }
    data = JSON.stringify(data); //dont add this in for loop because previous value will not print.for loop exist karega vaise hi data string me convert hoga.
  } else {
    data = document.getElementById("requestJsonText").value;
    console.log(data);
  }

  // Log all the value in the console for debugging
  console.log("Url is", url);
  console.log("requesttype is", requestType);
  console.log("contentType is ", contentType); //value from input
  console.log("data is", data);

  //If the request type is get
  if (requestType == "GET") {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("responsePrism").innerHTML = text;
        Prism.highlightAll();
      });
  } else {
    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((text) => {
        // document.getElementById('responseJsonText').value = text;
        document.getElementById("responsePrism").innerHTML = text;
        Prism.highlightAll();
      });
  }
});
