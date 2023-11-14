import { emailFormCheck, passwordFormCheck, signInCheck } from "./utils.js";
import { emailInput, passwordInput, form } from "./function/tag-selectors.js";

emailInput.addEventListener("focusout", emailFormCheck);
passwordInput.addEventListener("focusout", passwordFormCheck);
form.addEventListener("submit", signInCheck);
