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
  pwToggle: document.getElementById("password-toggled"),

  // button from
  signBtn: document.getElementById("signBtn"),
};

/**
 * input focusout일때 관련 class를 추가하는 함수
 */
function inputFocusOutClassAdd(inputId, textId, text) {
  inputId.classList.add("input-validation-fail");
  textId.textContent = text;
  textId.classList.add("font14-we4", "section__input-check-text");
  return false;
}

/**
 * input focusout일때 관련 class를 제거하는 함수
 */
function inputFocusOutClassRemove(inputId, textId, text) {
  inputId.classList.remove("input-validation-fail");
  textId.textContent = text;
  textId.classList.remove("font14-we4", "section__input-check-text");
  return true;
}

/**
 * toggle 버튼 클릭
 *
 */
function pwToggleClick(input, toggledBtn) {
  const toggleImg = toggledBtn.getElementsByTagName("img")[0];
  const eyeOnPath = "/images/eye-on.svg";
  const eyeOffPath = "/images/eye-off.svg";

  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleImg.setAttribute("src", eyeOnPath);
  } else {
    input.setAttribute("type", "password");
    toggleImg.setAttribute("src", eyeOffPath);
  }
}
export {
  domElements,
  inputFocusOutClassAdd,
  inputFocusOutClassRemove,
  pwToggleClick,
};
