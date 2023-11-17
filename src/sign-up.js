import { emailInput, passwordInput, passwordMatchInput, form } from "./function/tag-selectors.js";
import { passwordFormCheck, signUpEmailCheck, passwordMatchCheck, signUpCheck } from "./utils.js";

emailInput.addEventListener("focusout", signUpEmailCheck);
passwordInput.addEventListener("focusout", passwordFormCheck);
passwordMatchInput.addEventListener("focusout", passwordMatchCheck);
form.addEventListener("submit", signUpCheck);
