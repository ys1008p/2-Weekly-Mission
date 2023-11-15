import { submitBtn, emailInput, passwordInput } from "./modules/domSelectors.js";
import { authEvent } from "./modules/authEventHandler.js";
import { specifyWarningPosition } from "./modules/authEventHandler.js";
import { verifyLoginCredentials } from "./modules/authVerifyUser.js";

authEvent();

const submitSignInHandler = submitBtn.addEventListener("click", (e) => {
  if (verifyLoginCredentials(emailInput.value, passwordInput.value)) {
    submitBtn.parentElement.action = "./folder.html";
  } else {
    e.preventDefault();
    specifyWarningPosition(emailInput, "이메일을 확인해주세요");
    specifyWarningPosition(passwordInput, "비밀번호를 확인해주세요.");
  }
});
