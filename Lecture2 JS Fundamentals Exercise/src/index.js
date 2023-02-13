import "./style.css";

// patterns
const usernamePattern = /^a\d{5,}$/g;
const passwordPattern =
  /^(?=(.*[A-Z]){5})(?=(.*[^A-Za-z0-9-]){6})(?=(.*-){2}).{13}$/g;
const emailPattern = /@yara\.com/g;

// form
const form = document.querySelector("#form1");
// button
const submitBtn = document.querySelector(".rightBtn-2");

// inputFileds
const nameInput = document.querySelector("#uname");
const passInput = document.querySelector("#pass");
const emailInput = document.querySelector("#email");

// paragraphFields
const unameParagraph = document.querySelector("#nameError");
const passParagraph = document.querySelector("#passError");
const emailParagraph = document.querySelector("#emailError");

// validOrNot
let validName = false;
let validPass = false;
let validEmail = false;

nameInput.addEventListener("change", () => {
  // validate username
  if (!nameInput.value.match(usernamePattern)) {
    unameParagraph.textContent = "Invalid Input";
    validName = false;
  } else {
    unameParagraph.textContent = "";
    validName = true;
  }
});

passInput.addEventListener("change", () => {
  // validate password
  if (!passInput.value.match(passwordPattern)) {
    passParagraph.textContent = "Invalid Input";
    validPass = false;
  } else {
    passParagraph.textContent = "";
    validPass = true;
  }
});

emailInput.addEventListener("change", () => {
  // validate email
  if (!emailInput.value.match(emailPattern)) {
    emailParagraph.textContent = "Invalid Input";
    validEmail = false;
  } else {
    emailParagraph.textContent = "";
    validEmail = true;
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (validName && validPass && validEmail) {
    console.log(`Valid Data:
    Username:${nameInput.value}
    Password:${passInput.value}
    Email:${emailInput.value}`);
    form.reset();
  }
});
