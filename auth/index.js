import { resetError, validateInput } from "./utill/validation.js";
import { signin, signup } from "../api.js";
import { getStorage, setStorage } from "../storage.js";

if (getStorage("accessToken")) {
  window.location.href = "/folder.html";
}

const form = document.querySelector(".sign-form");
const submitBtn = form.querySelector(".cta");

const inputs = form.getElementsByTagName("input");
const toggleEyes = form.getElementsByClassName("eye-button");

const authType = submitBtn.dataset.auth;

const account = {};

const focusoutHandler = (e) => {
  validateInput(authType, e.target);
};

const handleAuth = async (authFunction) => {
  try {
    const result = await authFunction(account);
    if (result) {
      setStorage("accessToken", result.accessToken);
      window.location.href = "/folder.html";
    }
  } catch (e) {
    console.log(e);
  }
};

const submitHandler = async (e) => {
  e.preventDefault();
  resetError();
  let isFormValid = true;
  for (const input of inputs) {
    const valid = validateInput(authType, input);
    if (!valid) {
      isFormValid = false;
      break;
    }
  }
  if (isFormValid) {
    if (authType === "signin") {
      await handleAuth(signin);
    } else if (authType === "signup") {
      await handleAuth(signup);
    }
  }
};

const keyupHandler = (e) => {
  if (e.key === "Enter") {
    submitBtn.click();
  }
};

const toggleEyesHandler = function () {
  const input = this.previousElementSibling;
  const img = this.querySelector("img");

  if (input.type === "password") {
    input.type = "text";
    img.src = "../images/eye-on.svg";
  } else {
    input.type = "password";
    img.src = "../images/eye-off.svg";
  }
};

const changeHanlder = function () {
  const { name, value } = this;
  account[name] = value;
};

//submit 버튼 클릭 시, focuseout 이벤트 중지.
submitBtn.addEventListener("mousedown", (e) => e.preventDefault());

form.addEventListener("focusout", focusoutHandler);
form.addEventListener("submit", submitHandler);
form.addEventListener("keyup", keyupHandler);

Array.from(inputs).forEach(function (input) {
  input.addEventListener("change", changeHanlder.bind(input));
});

Array.from(toggleEyes).forEach(function (button) {
  button.addEventListener("click", toggleEyesHandler.bind(button));
});
