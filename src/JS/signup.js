import {
  emailInput,
  passwordInput,
  passwordConfirmInput,
  form,
  eyeToggleButton
} from "./commonTag.js";

import {
  passwordInputCheck,
  signUpEmailApi,
  passwordMatchCheck,
  signUpApi,
  togglePassword,
  redirectPage,
} from "./util.js";

const userAccessToken = localStorage.getItem("accessToken");

if (userAccessToken) {
  redirectPage();
}

eyeToggleButton.forEach((e) => e.addEventListener("click", () => togglePassword(e)));
emailInput.addEventListener("focusout", signUpEmailApi);
passwordInput.addEventListener("focusout", passwordInputCheck);
passwordConfirmInput.addEventListener("focusout", passwordMatchCheck);
form.addEventListener("submit", signUpApi);
