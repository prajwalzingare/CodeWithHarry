console.log("This is Project 4");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");
let validEmail = false;
let validPhone = false;
let validUser = false;
$("#failure").hide();
$("#success").hide();
// console.log(name, email, phone);
name.addEventListener("blur", () => {
  console.log("name is blured");
  //validate name hear
  let str = name.value;
  let regex = /^[a-zA-Z][0-9a-zA-Z]{2,10}$/;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid");
    name.classList.remove("is-invalid");
    validUser = true;
  } else {
    console.log("Your name is valid");
    name.classList.add("is-invalid");
    validUser = false;
  }
});

email.addEventListener("blur", () => {
  console.log("email is blured");
  //validate email hear
  let str = email.value;
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; //. means match any one charecter but \. means genuanli/litreally dot hona udhar.2)()this is one of section to write and [] this we should add for execution.
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("Your name is valid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  console.log("phone is blured");
  //validate phone hear
  let str = phone.value;
  let regex = /^[0-9]{10}$/;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("Your phone is valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("you have clicked");
  //submit form hear

  if (validEmail && validPhone && validUser) {
    console.log("phone,email and user are valid,Submitting the form");
    let success = document.getElementById("success");
    success.classList.add("show");
    // failure.classList.remove('show');
    // $('#failure').alert('close');
    $("#failure").hide();
    $("#success").show();
  } else {
    console.log(
      "one out of phone,email or user are not valid hence not submitting the form.please correct the eeror and try agian"
    );
    let failure = document.getElementById("failure");
    failure.classList.add("show");
    // success.classList.remove('show');
    // $('#success').alert('hide');
    $("#success").hide();
    $("#failure").show();
  }
});
