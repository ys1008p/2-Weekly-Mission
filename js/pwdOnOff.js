export const changePwViewMode = (e) => {
  // pw on off 버튼 이벤트
  const $buttonPwOnOff = e.target;
  if ($buttonPwOnOff.className === "pw-onoff") {
    const pwdInputTag = $buttonPwOnOff.previousElementSibling;
    if (pwdInputTag.type === "password") {
      $buttonPwOnOff.src = "../imgs/eye-on.svg";
      pwdInputTag.type = "text";
    } else {
      $buttonPwOnOff.src = "../imgs/eye-off.svg";
      pwdInputTag.type = "password";
    }
  }
};
