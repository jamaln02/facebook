var userNameInput = document.querySelector(".userName");
var userPasswordInput = document.querySelector(".userPassword");
var checkPassword = document.querySelector(".inputshowpassword");
var userVaild = document.querySelector(".uservaild");
var loginBtn = document.querySelector(".login");
var passVaild = document.querySelector(".passwordVaild");

function handlForm() {
  if (
    userNameInput.value == "" ||
    userNameInput.value.length < 3 ||
    userNameInput.value.includes(" ")
  ) {
    userVaild.classList.remove("d-none");
    return false;
  } else if (
    userPasswordInput.value == "" ||
    userPasswordInput.value.length < 6 ||
    userPasswordInput.value.includes(" ")
  ) {
    userVaild.classList.remove("d-none");
    return false;
  } else {
    userVaild.classList.add("d-none");
    return true;
  }
}
userPasswordInput.addEventListener("focus", () => {
  passVaild.classList.remove("d-none");
});

userPasswordInput.addEventListener("keyup", () => {
  if (userPasswordInput.value.length > 5) {
    passVaild.classList.replace("text-danger", "text-success");
  } else {
    passVaild.classList.replace("text-success", "text-danger");
  }
});

userPasswordInput.addEventListener("blur", () => {
  passVaild.classList.add("d-none");
});
if (userPasswordInput.value.length > 6) {
  passVaild.classList.replace("text-danger", "text-success");
}

checkPassword.addEventListener("click", () => {
  if (userPasswordInput.type == "password") {
    userPasswordInput.type = "text";
  } else {
    userPasswordInput.type = "password";
  }
});
