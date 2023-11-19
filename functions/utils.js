export let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function updateAlert(inputElement, parentElement, className, message) {
  let div = document.createElement("div");
  div.classList.add(className);
  div.innerHTML = message;
  inputElement.classList.add("alert-line");
  parentElement.appendChild(div);
}

export function removeAlert(alert, inputElement) {
  inputElement.classList.remove("alert-line");
  alert?.remove();
}

export let message = {
  email: {
    null: "이메일을 입력해주세요",
    invalid: "올바른 이메일 주소가 아닙니다.",
    duplicate: "이미 사용중인 이메일입니다.",
    check: "이메일을 확인해주세요.",
  },
  password: {
    null: "비밀번호를 입력해주세요",
    invalid: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
    match: "비밀번호가 일치하지 않아요.",
    check: "비밀번호를 확인해주세요.",
  },
};
