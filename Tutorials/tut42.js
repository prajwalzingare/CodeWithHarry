console.log("this is tut 42 fetch api in js");

// for more info must visit ✔✔ https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-42/

// In this tutorial, we will study about fetch API. The Fetch API is a promise-based API of JavaScript for making asynchronous HTTP requests in the browser similar to XMLHttpRequest (XHR). Unlike XHR, the fetch API is a simple and clean API that uses promises to provides more powerful features to fetch resources from the server. Fetch API is standardized now and is supported by all modern browsers except IE. The fetch() method only has one mandatory argument: the URL of the resource that we want to fetch.

//what is promises promise can be resolve or reject jo bhi koi promise karta hai mai kuch karke dunga matlab oo pura karga ya nahi karega promise

// How to use fetch API:-
// To use a Fetch API, just pass the URL, the path to the resource we want to fetch, to fetch() method. Here is the syntax:
// Pass the path of the resource that we want to retrieve as a parameter to fetch() url karu apan pass.important
//getting button
let myBtn = document.getElementById("btn");
//getting content
let content = document.getElementById("content");

// function getdata() {
//   console.log("started get data");
//   //As we know, the fetch() method returns a promise.
//   //why we use two then ❓-beacuse fetch return the first promise which resolve in first then nad apko text mileka jo api se aya hai jo promise hoga again jisko resolve karne ke liye duusra then lagega.ohk👌
//   url = "prajwal.txt";
//   fetch(url)//idhar fetch ne pahila promise kiya ki mai url se data launga.
//     .then((response) => {
//       console.log("inside first then");
//       //first promise completed in this then
//idhar dusra promise hua ki mai response ko text me return karunga.
//       return response.text();
//     })
//     .then((data) => {
//second promise complete hua inside second then.or data print hua console me
//       console.log(data);
//       console.log("inside second then");
//     });
// }

// function getdata() {
//   console.log("started get data");
//   url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       console.log("inside first then");
//       //we use json inspite of text because json writes data in object form text is also right nothing is wrong in that but text is not convinent so write json.
//       //Response.json se kya hoga data parse hoga text se object.is ki vajese kya hoga apka data pura object form me ban jayega so it is good😊
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log("inside second then");
//     });
// }
// console.log("Before get data");
// getdata(); //ye background me run hoga kuki program async hai direct after pe jump hoga
// console.log("After get data");

function postdata() {
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = '{ name: "prajwaljmdfjkggk", salary: "123", age: "23" }';
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    //string ko stringify karne ki jarurat nahi hai object ko stringify karne ki jarurat hai so if object is there than use strigify otherwise use simple data.
    body: data,
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
postdata();
