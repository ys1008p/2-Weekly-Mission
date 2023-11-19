import { emailFormCheck, passwordFormCheck, togglePassword, signInCheck, goToFolderPage } from "./utils.js";
import { emailInput, passwordInput, form, passwordToggleButtons } from "./function/tag-selectors.js";

const userAccessToken = localStorage.getItem("accessToken");
if (userAccessToken) {
  goToFolderPage();
}
emailInput.addEventListener("focusout", emailFormCheck);
passwordInput.addEventListener("focusout", passwordFormCheck);
form.addEventListener("submit", signInCheck);
passwordToggleButtons[0].addEventListener("click", () => togglePassword(passwordToggleButtons[0]));
