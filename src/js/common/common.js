/**
 * sign 공통 DOM
 */
const domElements = {
  // 이메일
  signEmail: document.getElementById("signEmail"),
  signEmailText: document.getElementById("signEmailText"),

  // 비밀번호
  signPw: document.getElementById("signPw"),
  signPwText: document.getElementById("signPwText"),

  // 비밀번호 toggle
  pwToggle: document.querySelectorAll(".password-toggled"),

  // button from
  signBtn: document.getElementById("signBtn"),
};

/**
 * input focusout일때 관련 class를 추가하는 함수
 */
function inputClassAdd(inputId, textId, text) {
  inputId.classList.add("input-validation-fail");
  textId.textContent = text;
  textId.classList.add("font14-we4", "section__input-check-text");
}

/**
 * input focusout일때 관련 class를 제거하는 함수
 */
function inputClassRemove(inputId, textId, text) {
  inputId.classList.remove("input-validation-fail");
  textId.textContent = text;
  textId.classList.remove("font14-we4", "section__input-check-text");
}

/**
 * toggle 버튼 클릭
 *
 */
let isToggled = false;
function pwToggleClick({ target }) {
  isToggled = !isToggled;

  if (isToggled) {
    target.src = "/images/eye-on.svg";
    target.parentElement.previousSibling.previousSibling.type = "text";
  } else {
    target.src = "/images/eye-off.svg";
    target.parentElement.previousSibling.previousSibling.type = "password";
  }
}
export { domElements, inputClassAdd, inputClassRemove, pwToggleClick };
