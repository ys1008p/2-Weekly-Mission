import { emailInput, passwordInput, passwordMatchInput, form } from "./function/tag-selectors.js";
import { passwordFormCheck, signUpEmailCheck } from "./utils.js";

emailInput.addEventListener("focusout", signUpEmailCheck);
passwordInput.addEventListener("focusout", passwordFormCheck);
