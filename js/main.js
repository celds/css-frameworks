const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

const showRegister = document.querySelector("#show-register");
const showLogin = document.querySelector("#show-login");

showRegister.addEventListener("click", function (event) {
  event.preventDefault();

  loginForm.hidden = true;
  registerForm.hidden = false;
});

showLogin.addEventListener("click", function (event) {
  event.preventDefault();

  registerForm.hidden = true;
  loginForm.hidden = false;
});
