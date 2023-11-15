import { submitBtn, emailInput, passwordInput, inputForm, passwordVerifyInput } from "./modules/domSelectors.js";
import { authEvent, emailErrorCheck, pwdErrorCheck, pwdVerifyErrorCheck } from "./modules/authEventHandler.js";
import { verifyValidId, verifyValidPassword, verifyValidPasswordVerify } from "./modules/authVerifyUser.js";

authEvent();

const submitSignUpHandler = submitBtn.addEventListener("click", (e) => {
  if (
    verifyValidId(emailInput.value) &&
    verifyValidPassword(passwordInput.value) &&
    verifyValidPasswordVerify(passwordInput.value, passwordVerifyInput.value)
  ) {
    submitBtn.parentElement.action = "./folder.html";
  } else {
    e.preventDefault();
    verifyValidId(emailInput.value) ? null : emailErrorCheck("signUp");
    verifyValidPassword(passwordInput.value) ? null : pwdErrorCheck();
    verifyValidPasswordVerify(passwordInput.value, passwordVerifyInput.value) ? null : pwdVerifyErrorCheck();
  }
});
