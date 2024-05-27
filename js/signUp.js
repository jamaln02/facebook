var firstNameInput = document.querySelector(".firstName");
var lastNameInput = document.querySelector(".lastName");
var emailInput = document.querySelector(".email");
var phoneInput = document.querySelector(".phone");
var passwordInput = document.querySelector(".password");
var confpassInput = document.querySelector(".confpass");
var firstNameLabel = document.querySelector(".firstNamelabel");
var lastNameLabel = document.querySelector(".lastNameLabel");
var emailLabel = document.querySelector(".emailLabel");
var phoneLabel = document.querySelector(".phoneLabel");
var passwordLabel = document.querySelector(".passwordLabel");
var confpassLabel = document.querySelector(".confpassLabel");
var genderInput = document.querySelectorAll(".checkGender");
var genderlabel = document.querySelector(".genderLabel");
var birthInput = document.querySelector(".birth");
var birthLabel = document.querySelector(".birthLabel");
var emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneCheck = /^01[0125][0-9]{8}$/;
var register = document.querySelector(".register");

function handlForm() {
  if (
    firstNameInput.value == "" ||
    firstNameInput.value.length < 3 ||
    firstNameInput.value.includes(" ")
  ) {
    resetValues();
    changeValues(firstNameLabel, "please enter valid UserName ⛔");
    return false;
  } else if (
    lastNameInput.value == "" ||
    lastNameInput.value.length < 3 ||
    lastNameInput.value.includes(" ")
  ) {
    resetValues();
    changeValues(lastNameLabel, "please enter valid LastName ⛔");
    return false;
  } else if (!emailCheck.test(emailInput.value)) {
    resetValues();
    changeValues(emailLabel, "please enter valid Email ⛔");
    return false;
  } else if (!phoneCheck.test(phoneInput.value)) {
    resetValues();
    changeValues(phoneLabel, "Valid PhoneNumber only ⛔");
    return false;
  } else if (
    passwordInput.value.length < 6 ||
    passwordInput.value == "" ||
    passwordInput.value.includes(" ")
  ) {
    resetValues();
    changeValues(passwordLabel, "please enter valid password ⛔");
    return false;
  } else if (
    confpassInput.value == "" ||
    confpassInput.value !== passwordInput.value
  ) {
    resetValues();
    changeValues(confpassLabel, "Password not matched ⛔");
    return false;
  } else if (
    genderInput[0].checked == false &&
    genderInput[1].checked == false
  ) {
    resetValues();
    changeValues(genderlabel, "Gender must be selected ⛔");
    return false;
  } else if (birthInput.value == "") {
    resetValues();
    changeValues(birthLabel, "Birthdate must be selected ⛔");
    return false;
  } else {
    resetValues();
    return true;
  }
}

function changeValues(label, massege) {
  label.innerHTML = massege;
  label.style.color = "red";
}

function resetValues() {
  firstNameLabel.innerHTML = "First Name :";
  firstNameLabel.style.color = "#1877f2";
  lastNameLabel.innerHTML = "Last Name :";
  lastNameLabel.style.color = "#1877f2";
  emailLabel.innerHTML = "Email :";
  emailLabel.style.color = "#1877f2";
  phoneLabel.innerHTML = "Phone Number :";
  phoneLabel.style.color = "#1877f2";
  passwordLabel.innerHTML = "Password :";
  passwordLabel.style.color = "#1877f2";
  confpassLabel.innerHTML = "Confirm Password :";
  confpassLabel.style.color = "#1877f2";
  genderlabel.innerHTML = "Gender :";
  genderlabel.style.color = "#1877f2";
  birthLabel.innerHTML = "Birthdate :";
  birthLabel.style.color = "#1877f2";
}
