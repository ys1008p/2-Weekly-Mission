export const changePwViewMode = (e) => {
  // pw on off 버튼 이벤트
  if (e.target.className === "pw-onoff") {
    if (e.target.previousElementSibling.type === "password") {
      e.target.src = "../imgs/eye-on.svg";
      e.target.previousElementSibling.type = "text";
    } else {
      e.target.src = "../imgs/eye-off.svg";
      e.target.previousElementSibling.type = "password";
    }
  }
};
