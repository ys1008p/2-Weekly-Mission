import { errorMessages } from "../tags.js";
import { removeRedMessage, createRedMessage, isValidAccess } from "./common.js";

let emailValid = false;

// 이메일 유효성을 검증하는 함수
async function enterEmailMessage(input) {
  const emailFormat =
    /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[a-zA-Z_-]+){1,2}$/;
  const emailValue = input.value;
  const tryAccessUser = {
    email: emailValue,
  };
  const local = "check-email";

  removeRedMessage(input);

  if (!emailValue) {
    createRedMessage(input, errorMessages.enterEmail);
  } else if (!emailFormat.test(emailValue)) {
    createRedMessage(input, errorMessages.checkFormEmail);
  }

  const responseStatus = await isValidAccess(tryAccessUser, local);

  if (responseStatus === 409) {
    createRedMessage(input, errorMessages.takenEmail);
  } else if (responseStatus === 200) {
    emailValid = true;
  }
}

export { enterEmailMessage, emailValid };
