const togglePasswords = document.querySelectorAll("#toggle-password");
const passwordInputs = document.querySelectorAll("#password-input");
togglePasswords.forEach((togglePassword, index) => {
  togglePassword.addEventListener("click", function () {
    // Toggle the type attribute
    passwordInputs.forEach((passwordInput, passwordIndex) => {
      {
        const type =
          passwordInput.getAttribute("type") === "password"
            ? "text"
            : "password";
        if (index == passwordIndex) {
          passwordInput.setAttribute("type", type);
        }
      }
    });

    // Toggle the icon (optional)
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});

const loginButtonElement = document.querySelector(".loginButton");
const registerInputElement = document.querySelector(".register");
const loginInfoElement = document.querySelector(".loginInfo");
const createAccount = document.querySelector(".createAccount");
createAccount.addEventListener("click", () => {
  if (createAccount.innerHTML === "Register") {
    createAccount.innerHTML = "Login";
    loginButtonElement.innerHTML = "Register";
    loginInfoElement.innerHTML = "Register";
    registerInputElement.classList.remove("register-off");
  } else if (createAccount.innerHTML === "Login") {
    createAccount.innerHTML = "Register";
    loginButtonElement.innerHTML = "Login";
    loginInfoElement.innerHTML = "Login";
    registerInputElement.classList.add("register-off");
  }
});
