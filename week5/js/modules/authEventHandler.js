import { $emailInput, $passwordInput, $passwordVerifyInput } from "./domElements.js";
import { validateEmail, validatePassword, validatePasswordVerify } from "./validator.js";
import { triggerInputValidationError, resetInputValidationError } from "./authDOMHandler.js";

const $inputForm = document.querySelector(".input-container");

const initializeSignForm = () => {
  const formFocusInHandler = $inputForm.addEventListener("focusin", resetInputValidationError);

  const eyeIconClickHandler = $inputForm.addEventListener("click", ({ target }) => {
    if (!target.classList.contains("toggle-show-pwd")) return;
    // 위 조건으로 인해, 아래 라인에서는 있다고 가정하고 로직 진행
    else {
      if (target.dataset.show === "true") {
        target.src = "../images/eye-off.svg";
        target.previousElementSibling.type = "password";
        target.dataset.show = "false";
      } else {
        target.src = "../images/eye-on.svg";
        target.previousElementSibling.type = "text";
        target.dataset.show = "true";
      }
    }
  });

  const formFocusOutHandler = $inputForm.addEventListener("focusout", (e) => {
    const userActionType = $inputForm.childElementCount > 2 ? "signUp" : "signIn";
    switch (e.target) {
      case $emailInput:
        const emailValidation = validateEmail($emailInput.value, userActionType);
        if (!emailValidation.result) triggerInputValidationError($emailInput, emailValidation.message);
        break;
      case $passwordInput:
        const passwordValidation = validatePassword($passwordInput.value);
        if (!passwordValidation.result) triggerInputValidationError($passwordInput, passwordValidation.message);
        break;
      case $passwordVerifyInput:
        const passwordVerifyValidation = validatePasswordVerify($passwordInput.value, $passwordVerifyInput.value);
        if (!passwordVerifyValidation.result)
          triggerInputValidationError($passwordVerifyInput, passwordVerifyValidation.message);
        break;
      default:
    }
  });
};

export { initializeSignForm };
