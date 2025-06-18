const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setErr = (element, message) => {
  const inpControl = element.parentElement;
  const errDisplay = inpControl.querySelector(".error");

  errDisplay.innerText = message;
  inpControl.classList.add("error");
  inpControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inpControl = element.parentElement;
  const errDisplay = inpControl.querySelector(".error");

  errDisplay.innerText = "";
  inpControl.classList.add("success");
  inpControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const confirmPassVal = confirmPass.value.trim();

  if (usernameVal === "") {
    setErr(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setErr(email, "Email is required");
  } else if (!isValidEmail(emailVal)) {
    setErr(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    setErr(password, "Password is required");
  } else if (passwordVal.length < 8) {
    setErr(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }

  if (confirmPassVal === "") {
    setErr(confirmPass, "Please confirm your password");
  } else if (confirmPassVal !== passwordVal) {
    setErr(confirmPass, "Passwords do not match");
  } else {
    setSuccess(confirmPass);
  }
};
