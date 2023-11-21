//클래스 추가, 제거에 관한 함수 css속성과 error 메시지 보여주는 창에 관함 함수모음
import {
  emailInput,
  emailError,
  passwordInput,
  passwordError,
  passwordInputCheck,
  passwordErrorCheck,
} from "../tag.js";

function emailAddClass() {
  emailInput.classList.add("red-border");
  emailError.classList.add("email-error", "error-message");
}
function successTextClass(){
  emailError.classList.add("email-error","success-message");
}

function emailRemoveClass() {
  emailInput.classList.remove("red-border");
  emailError.textContent = "";
  emailError.classList.remove("email-error", "error-message");
}

function passwordAddClass() {
  passwordInput.classList.add("red-border");
  passwordError.classList.add("email-error", "error-message");
}

function passwordRemoveClass() {
  passwordInput.classList.remove("red-border");
  passwordError.textContent = "";
  passwordError.classList.remove("email-error", "error-message");
}
function passwordInputCheckAddClass() {
  passwordInputCheck.classList.add("red-border");
  passwordErrorCheck.classList.add("email-error", "error-message");
}

function passwordErrorCheckRemoveClass() {
  passwordInputCheck.classList.remove("red-border");
  passwordErrorCheck.textContent = "";
  passwordErrorCheck.classList.remove("email-error", "error-message");
}
export {
  emailAddClass,
  passwordInputCheckAddClass,
  passwordErrorCheckRemoveClass,
  emailRemoveClass,
  passwordAddClass,
  passwordRemoveClass,
  successTextClass
};
