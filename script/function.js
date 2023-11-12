import userData from "./emailData.js";

function createTag(target, message) {
  target.classList = "redBorder";
  const span = document.createElement("span");
  span.innerHTML = `<span>${message}</span>`;
  span.classList.add("redMessage");
  target.parentElement.append(span);
}
function removeTag(target) {
  target.classList.toggle("redBorder", 0);
  console.log(target.nextSibling);
  if (target.nextSibling) {
    target.nextSibling.remove();
  }
}
function checkEmail(str) {
  const reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}
function emailDuplicateCheck(str) {
  return userData.find((el) => el.email === str);
}
function login(email, password) {
  const user = userData.find((el) => el.email === email);

  if (user && user.password === password) {
    return user; // 인증 성공
  } else {
    return null; // 인증 실패
  }
}
export { createTag, removeTag, checkEmail, emailDuplicateCheck, login };
