import { 
  emailInputCheck,
  passwordInputCheck,
  togglePassword,
  signInApi,
  redirectPage
} from "./util.js";

import {
  emailInput,
  passwordInput,
  form,
  eyeToggleButton
} from "./commonTag.js";

const userAccessToken = localStorage.getItem("accessToken");

if (userAccessToken) {
  redirectPage();
}

eyeToggleButton[0].addEventListener("click", () => togglePassword(eyeToggleButton[0]));
emailInput.addEventListener("focusout", emailInputCheck);
passwordInput.addEventListener("focusout", passwordInputCheck);
form.addEventListener("submit", signInApi);
