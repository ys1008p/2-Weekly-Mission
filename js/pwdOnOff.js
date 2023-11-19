export const changePwViewMode = (e) => {
  // pw on off 버튼 이벤트

  if (e.target.className !== "pw-onoff") return;

  const $buttonPwOnOff = e.target;
  const pwdInputTag = e.target.previousElementSibling;

  if (pwdInputTag.type === "password") {
    $buttonPwOnOff.src = "../imgs/eye-on.svg";
    pwdInputTag.type = "text";
  } else {
    $buttonPwOnOff.src = "../imgs/eye-off.svg";
    pwdInputTag.type = "password";
  }
};
