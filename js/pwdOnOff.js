export const changePwViewMode = (e) => {
  // pw on off 버튼 이벤트
  if (e.target.className === "pw-onoff") {
    const pwdInputTag = e.target.previousElementSibling;
    if (pwdInputTag.type === "password") {
      e.target.src = "../imgs/eye-on.svg";
      pwdInputTag.type = "text";
    } else {
      e.target.src = "../imgs/eye-off.svg";
      pwdInputTag.type = "password";
    }
  }
};
