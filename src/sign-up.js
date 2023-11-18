import {
  emailInput,
  passwordInput,
  passwordMatchInput,
  form,
  passwordToggleButtons,
} from "./function/tag-selectors.js";
import { passwordFormCheck, signUpEmailCheck, passwordMatchCheck, signUpCheck, togglePassword } from "./utils.js";

emailInput.addEventListener("focusout", signUpEmailCheck);
passwordInput.addEventListener("focusout", passwordFormCheck);
passwordMatchInput.addEventListener("focusout", passwordMatchCheck);
form.addEventListener("submit", signUpCheck);
passwordToggleButtons.forEach((toggleBtn) => toggleBtn.addEventListener("click", () => togglePassword(toggleBtn)));
