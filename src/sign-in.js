import { emailFormCheck, passwordFormCheck, togglePassword, signInCheck } from "./utils.js";
import { emailInput, passwordInput, form, passwordToggleButtons } from "./function/tag-selectors.js";

emailInput.addEventListener("focusout", emailFormCheck);
passwordInput.addEventListener("focusout", passwordFormCheck);
form.addEventListener("submit", signInCheck);
passwordToggleButtons[0].addEventListener("click", () => togglePassword(passwordToggleButtons[0]));
